Search.setIndex({"docnames": ["api_ref_dtypes", "api_ref_intro", "api_ref_kernel", "api_ref_quantization", "api_ref_sparsity", "dtypes", "generated/torchao.dtypes.AffineQuantizedTensor", "generated/torchao.dtypes.to_affine_quantized", "generated/torchao.dtypes.to_nf4", "generated/torchao.quantization.Int4WeightOnlyGPTQQuantizer", "generated/torchao.quantization.Int4WeightOnlyQuantizer", "generated/torchao.quantization.SmoothFakeDynQuantMixin", "generated/torchao.quantization.SmoothFakeDynamicallyQuantizedLinear", "generated/torchao.quantization.int4_weight_only", "generated/torchao.quantization.int8_dynamic_activation_int4_weight", "generated/torchao.quantization.int8_dynamic_activation_int8_weight", "generated/torchao.quantization.int8_weight_only", "generated/torchao.quantization.smooth_fq_linear_to_inference", "generated/torchao.quantization.swap_linear_with_smooth_fq_linear", "generated/torchao.sparsity.PerChannelNormObserver", "generated/torchao.sparsity.WandaSparsifier", "generated/torchao.sparsity.apply_fake_sparsity", "getting-started", "index", "overview", "performant_kernels", "quantization", "sg_execution_times", "sparsity", "tutorials/index", "tutorials/sg_execution_times", "tutorials/template_tutorial"], "filenames": ["api_ref_dtypes.rst", "api_ref_intro.rst", "api_ref_kernel.rst", "api_ref_quantization.rst", "api_ref_sparsity.rst", "dtypes.rst", "generated/torchao.dtypes.AffineQuantizedTensor.rst", "generated/torchao.dtypes.to_affine_quantized.rst", "generated/torchao.dtypes.to_nf4.rst", "generated/torchao.quantization.Int4WeightOnlyGPTQQuantizer.rst", "generated/torchao.quantization.Int4WeightOnlyQuantizer.rst", "generated/torchao.quantization.SmoothFakeDynQuantMixin.rst", "generated/torchao.quantization.SmoothFakeDynamicallyQuantizedLinear.rst", "generated/torchao.quantization.int4_weight_only.rst", "generated/torchao.quantization.int8_dynamic_activation_int4_weight.rst", "generated/torchao.quantization.int8_dynamic_activation_int8_weight.rst", "generated/torchao.quantization.int8_weight_only.rst", "generated/torchao.quantization.smooth_fq_linear_to_inference.rst", "generated/torchao.quantization.swap_linear_with_smooth_fq_linear.rst", "generated/torchao.sparsity.PerChannelNormObserver.rst", "generated/torchao.sparsity.WandaSparsifier.rst", "generated/torchao.sparsity.apply_fake_sparsity.rst", "getting-started.rst", "index.rst", "overview.rst", "performant_kernels.rst", "quantization.rst", "sg_execution_times.rst", "sparsity.rst", "tutorials/index.rst", "tutorials/sg_execution_times.rst", "tutorials/template_tutorial.rst"], "titles": ["torchao.dtypes", "<code class=\"docutils literal notranslate\"><span class=\"pre\">torchao</span></code> API Reference", "torchao.kernel", "torchao.quantization", "torchao.sparsity", "Dtypes", "AffineQuantizedTensor", "to_affine_quantized", "to_nf4", "Int4WeightOnlyGPTQQuantizer", "Int4WeightOnlyQuantizer", "SmoothFakeDynQuantMixin", "SmoothFakeDynamicallyQuantizedLinear", "int4_weight_only", "int8_dynamic_activation_int4_weight", "int8_dynamic_activation_int8_weight", "int8_weight_only", "smooth_fq_linear_to_inference", "swap_linear_with_smooth_fq_linear", "PerChannelNormObserver", "WandaSparsifier", "apply_fake_sparsity", "Getting Started", "Welcome to the torchao Documentation", "Overview", "Performant Kernels", "Quantization", "Computation times", "Sparsity", "&lt;no title&gt;", "Computation times", "Template Tutorial"], "terms": {"thi": [1, 6, 12, 13, 14, 19, 20, 21, 31], "section": 1, "introduc": 1, "dive": 1, "detail": 1, "how": [1, 6, 13], "integr": 1, "pytorch": [1, 23, 31], "optim": 1, "your": [1, 23], "machin": 1, "learn": [1, 13, 31], "model": [1, 14, 17, 18, 20, 21, 23], "sparsiti": [1, 19, 20, 21, 23], "quantiz": [1, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 23], "dtype": [1, 6, 7, 8, 10, 23], "kernel": [1, 6, 13], "tba": [2, 5, 22, 24, 25, 26, 28], "class": [6, 9, 10, 11, 12, 19, 20], "torchao": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "layout_tensor": 6, "aqtlayout": 6, "block_siz": [6, 7, 8], "tupl": [6, 7, 20], "int": [6, 7, 8, 10, 20], "shape": 6, "size": [6, 13, 14], "quant_min": [6, 7], "option": [6, 7, 10, 17, 18, 20], "none": [6, 7, 17, 18, 20], "quant_max": [6, 7], "zero_point_domain": [6, 7, 13], "zeropointdomain": [6, 7, 13], "stride": 6, "sourc": [6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 29, 31], "affin": 6, "tensor": [6, 7, 8, 13, 20, 31], "subclass": [6, 12, 19], "mean": 6, "we": 6, "float": [6, 7, 13, 18, 20], "point": [6, 13], "an": [6, 20, 23], "transform": 6, "quantized_tensor": 6, "float_tensor": 6, "scale": [6, 11, 12, 17, 18], "zero_point": [6, 13], "The": [6, 17, 18, 20], "repres": [6, 20], "look": 6, "extern": 6, "regardless": 6, "intern": 6, "represent": [6, 13], "s": 6, "type": [6, 9, 10, 13], "orient": 6, "field": 6, "serv": 6, "gener": [6, 29, 31], "layout": [6, 13], "storag": 6, "data": 6, "e": 6, "g": 6, "store": [6, 19], "plain": [6, 7], "int_data": 6, "pack": 6, "format": 6, "depend": 6, "devic": [6, 9, 10], "oper": 6, "granular": [6, 13, 14], "element": 6, "share": 6, "same": 6, "qparam": 6, "when": 6, "input": [6, 20], "dimens": 6, "ar": [6, 13, 20], "us": [6, 13, 14, 20, 21, 23], "per": [6, 12, 13, 14, 15, 16, 20], "torch": [6, 10, 12, 13, 17, 18, 21, 31], "minimum": 6, "valu": [6, 11, 12, 17, 20], "specifi": [6, 20], "deriv": 6, "from": [6, 14, 27, 30, 31], "maximum": [6, 17], "domain": [6, 13], "should": [6, 12, 19, 20], "eitehr": 6, "integ": [6, 13], "zero": [6, 13, 20], "ad": [6, 20], "dure": [6, 18], "subtract": 6, "unquant": 6, "default": [6, 17, 18], "input_quant_func": 6, "callabl": 6, "function": [6, 12, 19, 20, 21, 23], "object": 6, "take": [6, 12, 19], "output": [6, 31], "float32": 6, "dequant": [6, 13], "given": 6, "return": [6, 17, 18], "arg": [6, 11, 12, 20], "kwarg": [6, 11, 12, 19, 20, 21], "perform": [6, 11, 12, 17, 19], "convers": 6, "A": [6, 19], "infer": [6, 12, 17], "argument": 6, "self": [6, 11, 12], "If": [6, 17, 20], "alreadi": 6, "ha": 6, "correct": 6, "otherwis": 6, "copi": [6, 20], "desir": 6, "here": 6, "wai": 6, "call": [6, 12, 19], "non_block": 6, "fals": [6, 13, 17, 20], "memory_format": 6, "preserve_format": 6, "memori": 6, "tri": 6, "convert": [6, 12], "asynchron": 6, "respect": 6, "host": 6, "possibl": 6, "cpu": 6, "pin": 6, "cuda": [6, 9, 10], "set": [6, 11, 12, 17, 20], "new": 6, "creat": 6, "even": 6, "match": 6, "other": [6, 20, 31], "exampl": [6, 20, 27, 29, 30, 31], "randn": 6, "2": [6, 13, 21, 31], "initi": 6, "float64": 6, "0": [6, 9, 11, 12, 18, 20, 27, 30, 31], "5044": 6, "0005": 6, "3310": 6, "0584": 6, "cuda0": 6, "true": [6, 7, 9, 10, 17], "input_float": 7, "mapping_typ": 7, "mappingtyp": 7, "target_dtyp": 7, "ep": 7, "scale_dtyp": 7, "zero_point_dtyp": 7, "preserve_zero": [7, 13], "bool": [7, 10, 17], "extended_layout": 7, "str": [7, 18, 20], "inner_k_til": [7, 9, 10, 13], "64": [8, 9, 13], "scaler_block_s": 8, "256": [8, 10, 13], "blocksiz": 9, "128": [9, 13], "percdamp": 9, "01": 9, "groupsiz": [9, 10], "8": [9, 10, 13], "padding_allow": [9, 10], "precis": 10, "bfloat16": 10, "set_debug_x_absmax": [11, 12], "x_running_abs_max": [11, 12], "which": [11, 12], "lead": [11, 12], "smooth": [11, 12], "all": [11, 12, 19, 20, 21, 27, 29], "ones": [11, 12, 20], "alpha": [11, 12, 18], "5": [11, 12, 18, 20, 31], "enabl": [11, 12], "benchmark": [11, 12, 17], "without": [11, 12], "calibr": [11, 12], "replac": [12, 18], "nn": [12, 17, 18], "linear": [12, 13, 14, 15, 16, 18, 21], "implement": 12, "dynam": [12, 14, 15], "token": [12, 14, 15], "activ": [12, 14, 15, 17, 20], "channel": [12, 15, 16, 19], "weight": [12, 13, 14, 15, 16, 20], "base": [12, 20], "smoothquant": [12, 17, 18], "forward": [12, 19], "x": [12, 31], "defin": [12, 19, 20], "comput": [12, 19, 20], "everi": [12, 19], "overridden": [12, 19], "although": [12, 19], "recip": [12, 19], "pass": [12, 19], "need": [12, 19, 20], "within": [12, 19], "one": [12, 19], "modul": [12, 17, 18, 19, 20], "instanc": [12, 19], "afterward": [12, 19], "instead": [12, 13, 19], "sinc": [12, 19], "former": [12, 19], "care": [12, 19], "run": [12, 17, 19, 31], "regist": [12, 19], "hook": [12, 19], "while": [12, 19, 20], "latter": [12, 19], "silent": [12, 19], "ignor": [12, 19], "them": [12, 19], "classmethod": 12, "from_float": 12, "mod": 12, "fake": 12, "version": 12, "note": [12, 20], "requir": 12, "to_infer": 12, "calcul": [12, 17], "prepar": [12, 17, 20], "group_siz": [13, 14], "appli": [13, 14, 15, 16], "uint4": 13, "onli": [13, 16], "asymmetr": [13, 14], "group": [13, 14], "layer": [13, 15, 16, 17, 18, 20, 21], "tensor_core_til": 13, "speedup": 13, "tinygemm": 13, "target": [13, 20], "int4mm": 13, "op": 13, "aten": 13, "_weight_int4pack_mm": 13, "main": 13, "differ": 13, "algorithm": 13, "compar": [13, 20], "more": [13, 14, 23], "tradit": 13, "follow": 13, "1": [13, 20, 27, 30, 31], "doe": 13, "have": [13, 20], "exactli": 13, "choose_qparams_affin": 13, "pleas": 13, "relev": [13, 31], "code": [13, 29, 31], "quantize_affin": 13, "dequantize_affin": 13, "about": 13, "paramet": [13, 14, 17, 18, 20], "chosen": 13, "control": [13, 14, 20], "smaller": [13, 14], "fine": [13, 14], "grain": [13, 14], "choic": 13, "32": [13, 14], "int4": [13, 14], "mm": 13, "4": [13, 21], "int8": [14, 15, 16], "symmetr": [14, 15, 16], "produc": 14, "executorch": 14, "backend": 14, "current": [14, 18, 20], "did": 14, "support": 14, "lower": 14, "flow": [14, 21], "yet": 14, "debug_skip_calibr": 17, "each": [17, 19], "smoothfakedynamicallyquantizedlinear": [17, 18], "contain": [17, 18], "debug": 17, "skip_fqn_list": 18, "cur_fqn": 18, "equival": 18, "list": [18, 20], "fulli": 18, "qualifi": 18, "name": [18, 20], "skip": [18, 20], "being": 18, "process": [18, 31], "factor": 18, "custom": 19, "observ": 19, "l2": 19, "norm": [19, 20], "buffer": 19, "x_orig": 19, "sparsity_level": 20, "semi_structured_block_s": 20, "wanda": 20, "sparsifi": 20, "prune": [20, 21, 23], "propos": 20, "http": 20, "arxiv": 20, "org": 20, "ab": 20, "2306": 20, "11695": 20, "awar": 20, "method": 20, "remov": 20, "product": 20, "magnitud": 20, "three": 20, "variabl": 20, "number": 20, "spars": 20, "block": 20, "out": 20, "level": 20, "config": 20, "dict": 20, "parametr": 20, "modifi": 20, "inplac": 20, "you": [20, 31], "preserv": 20, "origin": 20, "deepcopi": 20, "squash_mask": 20, "params_to_keep": 20, "params_to_keep_per_lay": 20, "squash": 20, "mask": 20, "appropri": 20, "either": 20, "sparse_param": 20, "attach": 20, "kei": [20, 31], "save": 20, "param": 20, "specif": 20, "fqn": 20, "string": 20, "xdoctest": 20, "local": 20, "undefin": 20, "don": 20, "t": 20, "ani": 20, "hasattr": 20, "submodule1": 20, "keep": 20, "linear1": 20, "foo": 20, "bar": 20, "submodule2": 20, "linear42": 20, "baz": 20, "print": [20, 31], "42": 20, "24": 20, "some": 20, "update_mask": 20, "tensor_nam": 20, "statist": 20, "retriev": 20, "first": 20, "act_per_input": 20, "Then": 20, "metric": 20, "matrix": 20, "across": 20, "whole": 20, "simul": 21, "It": 21, "ao": 21, "open": 23, "librari": 23, "provid": 23, "nativ": 23, "our": 23, "under": 23, "develop": 23, "content": 23, "come": 23, "soon": 23, "00": [27, 30], "003": [27, 30, 31], "total": [27, 30, 31], "execut": [27, 30], "file": [27, 30], "galleri": [27, 29, 31], "mem": [27, 30], "mb": [27, 30], "templat": [27, 29, 30], "tutori": [27, 29, 30], "tutorials_sourc": 27, "template_tutori": [27, 30, 31], "py": [27, 30, 31], "download": [29, 31], "python": [29, 31], "tutorials_python": 29, "zip": 29, "jupyt": [29, 31], "notebook": [29, 31], "tutorials_jupyt": 29, "sphinx": [29, 31], "go": 31, "end": 31, "full": 31, "author": 31, "firstnam": 31, "lastnam": 31, "what": 31, "item": 31, "3": 31, "prerequisit": 31, "v2": 31, "gpu": 31, "describ": 31, "why": 31, "topic": 31, "import": 31, "add": 31, "link": 31, "research": 31, "paper": 31, "walk": 31, "through": 31, "below": 31, "automat": 31, "rand": 31, "8184": 31, "6106": 31, "8050": 31, "8806": 31, "9997": 31, "1170": 31, "7216": 31, "8712": 31, "6246": 31, "7276": 31, "9634": 31, "1743": 31, "2033": 31, "5848": 31, "1533": 31, "practic": 31, "user": 31, "test": 31, "knowledg": 31, "nlp": 31, "scratch": 31, "summar": 31, "concept": 31, "cover": 31, "highlight": 31, "takeawai": 31, "link1": 31, "link2": 31, "time": 31, "script": 31, "minut": 31, "second": 31, "ipynb": 31}, "objects": {"torchao.dtypes": [[6, 0, 1, "", "AffineQuantizedTensor"], [7, 2, 1, "", "to_affine_quantized"], [8, 2, 1, "", "to_nf4"]], "torchao.dtypes.AffineQuantizedTensor": [[6, 1, 1, "", "dequantize"], [6, 1, 1, "", "to"]], "torchao.quantization": [[9, 0, 1, "", "Int4WeightOnlyGPTQQuantizer"], [10, 0, 1, "", "Int4WeightOnlyQuantizer"], [11, 0, 1, "", "SmoothFakeDynQuantMixin"], [12, 0, 1, "", "SmoothFakeDynamicallyQuantizedLinear"], [13, 2, 1, "", "int4_weight_only"], [14, 2, 1, "", "int8_dynamic_activation_int4_weight"], [15, 2, 1, "", "int8_dynamic_activation_int8_weight"], [16, 2, 1, "", "int8_weight_only"], [17, 2, 1, "", "smooth_fq_linear_to_inference"], [18, 2, 1, "", "swap_linear_with_smooth_fq_linear"]], "torchao.quantization.SmoothFakeDynQuantMixin": [[11, 1, 1, "", "set_debug_x_absmax"]], "torchao.quantization.SmoothFakeDynamicallyQuantizedLinear": [[12, 1, 1, "", "forward"], [12, 1, 1, "", "from_float"], [12, 1, 1, "", "set_debug_x_absmax"], [12, 1, 1, "", "to_inference"]], "torchao": [[4, 3, 0, "-", "sparsity"]], "torchao.sparsity": [[19, 0, 1, "", "PerChannelNormObserver"], [20, 0, 1, "", "WandaSparsifier"], [21, 2, 1, "", "apply_fake_sparsity"]], "torchao.sparsity.PerChannelNormObserver": [[19, 1, 1, "", "forward"]], "torchao.sparsity.WandaSparsifier": [[20, 1, 1, "", "prepare"], [20, 1, 1, "", "squash_mask"], [20, 1, 1, "", "update_mask"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:function", "3": "py:module"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "function", "Python function"], "3": ["py", "module", "Python module"]}, "titleterms": {"torchao": [0, 1, 2, 3, 4, 23], "dtype": [0, 5], "api": [1, 23], "refer": [1, 23], "python": 1, "kernel": [2, 25], "quantiz": [3, 26], "sparsiti": [4, 28], "affinequantizedtensor": 6, "to_affine_quant": 7, "to_nf4": 8, "int4weightonlygptqquant": 9, "int4weightonlyquant": 10, "smoothfakedynquantmixin": 11, "smoothfakedynamicallyquantizedlinear": 12, "int4_weight_onli": 13, "int8_dynamic_activation_int4_weight": 14, "int8_dynamic_activation_int8_weight": 15, "int8_weight_onli": 16, "smooth_fq_linear_to_infer": 17, "swap_linear_with_smooth_fq_linear": 18, "perchannelnormobserv": 19, "wandasparsifi": 20, "apply_fake_spars": 21, "get": 22, "start": 22, "welcom": 23, "document": 23, "overview": [24, 31], "perform": 25, "comput": [27, 30], "time": [27, 30], "templat": 31, "tutori": 31, "step": 31, "option": 31, "addit": 31, "exercis": 31, "conclus": 31, "further": 31, "read": 31}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})