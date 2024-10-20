#!/bin/bash
# (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
export TORCHAO_LIBRARIES=${SCRIPT_DIR}/../../../../../..

export CMAKE_OUT=/tmp/cmake-out/torch_ao/examples
cmake -DTORCHAO_LIBRARIES=${TORCHAO_LIBRARIES} \
    -S ${TORCHAO_LIBRARIES}/torchao/experimental/kernels/cpu/linear/examples \
    -B ${CMAKE_OUT} \
    -DOpenMP_ROOT=$(brew --prefix libomp)
cmake --build  ${CMAKE_OUT}

# Run
case "$1" in
    separate_function_wrappers) ${CMAKE_OUT}/separate_function_wrappers; ;;
    stateful_class_wrapper) ${CMAKE_OUT}/stateful_class_wrapper; ;;
    *) echo "Unknown example: $1. Please specify one of: separate_function_wrappers, stateful_class_wrapper."; exit 1; ;;
esac
