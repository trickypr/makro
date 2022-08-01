Search.setIndex({"docnames": ["contributing", "contributing/basics", "index", "reference", "reference/makros.MakroParser", "reference/makros.Makros", "reference/makros.macro_creation.MacroParser", "reference/makros.macro_creation.MacroTranslator", "reference/makros.macro_creation.TokenCase", "reference/makros.macro_creation.Tokens", "reference/makros.macro_creation.pyx", "reference/makros.translate_file", "reference/makros.translate_folder", "reference_index/macro_creation", "reference_index/makros", "usage", "usage/001_getting_started", "usage/002_using_the_enum_macro", "usage/003_using_the_namespace_macro", "usage/004_writing_custom_local_macros"], "filenames": ["contributing.rst", "contributing/basics.rst", "index.rst", "reference.rst", "reference/makros.MakroParser.rst", "reference/makros.Makros.rst", "reference/makros.macro_creation.MacroParser.rst", "reference/makros.macro_creation.MacroTranslator.rst", "reference/makros.macro_creation.TokenCase.rst", "reference/makros.macro_creation.Tokens.rst", "reference/makros.macro_creation.pyx.rst", "reference/makros.translate_file.rst", "reference/makros.translate_folder.rst", "reference_index/macro_creation.rst", "reference_index/makros.rst", "usage.rst", "usage/001_getting_started.rst", "usage/002_using_the_enum_macro.rst", "usage/003_using_the_namespace_macro.rst", "usage/004_writing_custom_local_macros.rst"], "titles": ["Contributing", "Getting started developing", "Makros documentation overview", "Module Reference", "MakroParser", "Makros", "MacroParser", "MacroTranslator", "TokenCase", "Tokens", "pyx", "makros.translate_file", "makros.translate_folder", "Macro Creation", "Makros Core", "User guide", "Getting started", "Using the enum macro", "Using the namespace macro", "Writing custom macros locally"], "terms": {"thi": [0, 1, 4, 6, 7, 8, 10, 16, 17, 18, 19], "contain": [0, 4, 18], "all": [0, 6, 7, 12], "document": [0, 1], "makro": [0, 1, 3, 4, 6, 7, 8, 9, 10, 16, 19], "If": [0, 8, 9, 18, 19], "you": [0, 1, 4, 5, 6, 7, 9, 11, 12, 14, 16, 17, 18, 19], "ar": [0, 1, 13, 16, 17, 18], "new": [0, 1, 4, 9, 18], "user": [0, 2, 9], "probabl": 0, "look": [0, 16], "get": [0, 2, 4, 5, 15, 18], "start": [0, 2, 15, 19], "section": 0, "develop": [0, 2, 19], "prerequisit": [0, 15], "set": [0, 18, 19], "up": [0, 6, 7, 19], "build": [0, 13, 14], "environ": 0, "write": [0, 2, 4, 9, 11, 12, 15, 18], "test": [0, 18], "python": [1, 4, 7, 10, 16, 17, 19], "knowledg": [1, 19], "git": 1, "experi": [1, 14, 17], "A": [1, 9, 16, 17, 19], "fork": 1, "clone": 1, "your": [1, 7, 9, 14, 15, 18, 19], "local": [1, 2, 15], "comput": 1, "poetri": 1, "instal": [1, 15], "first": [1, 15, 17, 19], "creat": [1, 4, 10, 14, 16, 17, 19], "branch": 1, "featur": [1, 5, 18], "can": [1, 5, 16, 17, 18, 19], "either": 1, "do": [1, 4, 16, 17], "client": 1, "follow": [1, 4, 17], "command": [1, 16, 19], "checkout": 1, "b": 1, "my": 1, "next": [1, 9], "project": [1, 14, 19], "depend": [1, 5], "enter": 1, "virtual": 1, "shell": 1, "befor": [1, 9], "implement": [1, 6, 7, 14], "fix": 1, "bug": 1, "should": [1, 4, 5, 6, 7, 14, 16, 17], "cover": 1, "There": 1, "two": 1, "differ": [1, 9], "type": [1, 8, 9, 17, 19], "us": [1, 2, 4, 5, 8, 10, 14, 15, 19], "insid": [1, 19], "file": [1, 4, 5, 11, 12, 16, 17, 18, 19], "transpil": 1, "execut": 1, "make": [1, 6], "sure": 1, "pars": [1, 4, 5, 6, 7, 11, 12, 19], "translat": [1, 6, 7, 19], "work": [1, 6], "expect": 1, "export": [1, 16, 18], "function": [1, 10, 13, 14, 18, 19], "class": [1, 4, 5, 6, 7, 8, 9, 10, 13, 17, 19], "like": [1, 14, 16, 19], "token": [1, 3, 4, 5, 6, 8, 19], "To": [1, 19], "add": [1, 19], "crate": 1, "mpy": [1, 11, 12, 16, 17, 19], "The": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19], "runner": 1, "automat": 1, "pick": [1, 6, 7], "gener": [1, 4, 7, 10, 17], "written": 1, "pytest": 1, "guid": [1, 2], "how": 1, "we": [1, 17, 18, 19], "have": [1, 4, 17, 19], "custom": [1, 2, 13, 15], "than": [1, 5], "invok": 1, "enum": [2, 15, 19], "macro": [2, 3, 4, 6, 7, 8, 9, 15, 16], "namespac": [2, 15, 16, 19], "contribut": 2, "modul": [2, 14, 17], "refer": 2, "core": [2, 3], "creation": [2, 3], "makropars": [3, 5, 14], "translate_fil": [3, 14], "translate_fold": [3, 14], "tokencas": [3, 9], "macropars": [3, 19], "macrotransl": [3, 19], "pyx": 3, "qualifi": [4, 5, 6, 7, 8, 9], "name": [4, 5, 6, 7, 8, 9, 10, 17, 19], "file_path": [4, 16], "path": [4, 5, 11, 12], "global_control": 4, "base": [4, 5, 6, 7, 8, 9, 18], "object": [4, 5, 8, 9, 14], "provid": [4, 5, 6, 8, 9, 10, 13, 14, 17, 19], "an": [4, 5, 9, 17, 19], "api": [4, 14], "singl": 4, "avoid": [4, 14], "construct": 4, "directli": [4, 14], "instead": [4, 14], "method": [4, 5, 6, 7, 8, 9], "pass": [4, 6, 9], "constructor": 4, "content": [4, 12, 17, 19], "disk": [4, 11, 12], "parse_path": 4, "parse_str": 4, "string": [4, 5, 8, 19], "return": [4, 5, 6, 7, 8, 9, 10, 17, 18, 19], "output": [4, 6, 10, 11], "parse_token": 4, "intern": 4, "state": 4, "maintain": [4, 16], "good": 4, "chang": [4, 14], "available_macro": 4, "current_indent": 4, "becaus": [4, 19], "idea": 4, "parser": [4, 5, 6, 7, 9, 16, 19], "instanc": [4, 5, 8, 14], "each": 4, "being": 4, "attribut": 4, "list": [4, 5, 9], "macrodef": 4, "been": [4, 19], "import": [4, 11, 12, 14, 16, 17, 18, 19], "str": [4, 7, 8, 9, 10, 17, 19], "current": [4, 9, 18], "indent": [4, 10], "level": [4, 14], "none": [4, 10], "read": 4, "expand": 4, "ani": [4, 5, 6, 7, 9, 16, 17, 19], "them": [4, 19], "back": 4, "arg": [4, 5, 6, 7, 8, 9, 10, 11, 12], "wish": 4, "input": 4, "from": [4, 11, 12, 14, 16, 17, 18, 19], "raw_token": 4, "tokeninfo": [4, 8, 9], "which": [4, 19], "convert": [4, 16, 17], "number": [4, 17, 19], "valid": 4, "respons": [5, 19], "track": 5, "progress": 5, "expens": 5, "task": 5, "run": [5, 16, 18], "more": [5, 17, 19], "onc": [5, 6], "These": [5, 13, 14], "includ": [5, 9, 16, 19], "boostrap": 5, "librari": [5, 19], "keep": 5, "copi": [5, 17], "resolv": 5, "requir": [5, 6, 13], "bootstrap": [5, 19], "It": [5, 6, 14, 16, 17, 18], "also": [5, 16], "instanti": 5, "subclass": 5, "abov": 5, "static": 5, "global": 5, "singleton": 5, "perform": 5, "henc": 5, "get_pars": 5, "instanci": 5, "access": [5, 17, 18], "plan": 5, "fake": 5, "_creation": [6, 7, 8, 9], "macro_cr": [6, 7, 8, 9, 10], "abc": [6, 7], "need": [6, 9, 18, 19], "fill": 6, "out": [6, 9, 16, 19], "attach": 6, "note": [6, 7, 17, 18], "must": [6, 7, 19], "extend": [6, 7, 10, 16, 19], "els": [6, 7], "abstract": [6, 7], "call": [6, 7, 17, 18, 19], "ha": [6, 9, 19], "reach": 6, "end": [6, 9], "ast": [6, 7, 19], "later": 6, "defin": 7, "youself": 7, "code": [7, 10, 15, 17, 18, 19], "check": [8, 9], "match": [8, 9], "specif": [8, 9, 10], "detail": 8, "bool": [8, 9], "against": [8, 9, 17], "inform": 8, "here": [8, 16, 19], "new_str": 8, "specifi": 8, "see": [8, 19], "chain": 8, "new_typ": 8, "int": 8, "filenam": 9, "helper": [9, 19], "wrap": 9, "around": 9, "common": 9, "might": 9, "recurs": [9, 19], "decent": [9, 19], "advanc": [9, 19], "goe": 9, "forward": 9, "one": [9, 19], "wa": 9, "just": [9, 17, 19], "over": 9, "checker": 9, "buffer": 9, "case": 9, "want": [9, 11, 12, 18], "consum": 9, "failure_messag": 9, "Will": [9, 12], "otherwis": 9, "rais": 9, "error": [9, 18], "messag": 9, "token_something_els": 9, "print": [9, 16, 17, 18, 19], "context": 9, "help": 9, "programm": 9, "figur": 9, "what": [9, 16], "go": 9, "wrong": 9, "occur": 9, "human": 9, "readabl": 9, "except": 9, "stack": 9, "trace": 9, "is_at_end": 9, "true": 9, "marker": 9, "find": 9, "found": 9, "peek": 9, "without": [9, 18], "modifi": 9, "toke": 9, "previou": 9, "last": 9, "create_class": 10, "bodi": 10, "option": 10, "given": 10, "usual": 10, "program": [10, 18, 19], "default": [10, 16], "create_func": 10, "take": 10, "separ": 10, "comma": 10, "text": 10, "amount": 10, "space": 10, "valu": [10, 17, 18], "block": 10, "newlin": 10, "its": 11, "same": [11, 16], "locat": 11, "replac": [11, 19], "py": [11, 16, 19], "my_fil": 11, "folder_path": 12, "within": [12, 16, 19], "folder": [12, 19], "my_fold": 12, "third": 14, "parti": 14, "system": 14, "thei": [14, 16], "root": 14, "recommend": 14, "higher": 14, "smaller": 14, "most": [14, 17], "flexibl": 14, "via": [14, 16, 17], "pip": 16, "other": [16, 17], "packag": [16, 19], "By": 16, "behav": 16, "wai": 16, "interpret": [16, 19], "doe": 16, "simpl": [16, 19], "hello": [16, 18, 19], "world": [16, 18, 19], "exampl": [16, 17, 18, 19], "But": 16, "abl": 16, "whilst": [16, 19], "still": 16, "compat": 16, "For": [16, 18, 19], "allow": [16, 18], "def": [16, 17, 18, 19], "termin": 16, "right": 16, "awai": 16, "significantli": 17, "power": 17, "altern": 17, "where": 17, "anim": 17, "dog": 17, "cat": 17, "bird": 17, "__assign_enum_types__": 17, "__eq__": 17, "self": [17, 19], "isinst": 17, "__str__": 17, "__init__": 17, "f": [17, 19], "del": 17, "understand": [17, 19], "purpos": 17, "under": 17, "hood": 17, "repres": 17, "compar": 17, "determin": 17, "continu": 17, "animal_1": 17, "animal_2": 17, "lion": 17, "assert": 17, "behavior": 17, "fairli": [17, 19], "normal": 17, "part": [17, 19], "ignor": 17, "mean": 17, "equal": 17, "properti": 17, "property_nam": 17, "so": [17, 19], "avail": [17, 19], "github": [17, 18, 19], "scope": 18, "model": 18, "off": 18, "typescript": 18, "store": 18, "store_cont": 18, "load_stor": 18, "load": 18, "save_stor": 18, "save": 18, "kei": 18, "howev": 18, "cannot": 18, "In": [18, 19], "unexport": 18, "variabl": 18, "time": 18, "due": 18, "structur": 18, "mai": [18, 19], "open": 18, "pull": 18, "request": 18, "repo": 18, "craft": 19, "abil": 19, "own": 19, "publish": 19, "pypi": 19, "often": 19, "easier": 19, "would": 19, "were": 19, "greet": 19, "json": 19, "templat": 19, "folder_nam": 19, "descript": 19, "macro_descript": 19, "arrai": 19, "Then": 19, "greeter": 19, "select": 19, "keyword": 19, "sai": 19, "someon": 19, "leav": 19, "techniqu": 19, "familiar": 19, "anyon": 19, "who": 19, "complet": 19, "fist": 19, "book": 19, "http": 19, "craftinginterpret": 19, "com": 19, "full": 19, "blown": 19, "parer": 19, "necessari": 19, "complex": 19, "token_return": 19, "send": 19, "tree": 19, "our": 19, "neat": 19, "now": 19, "long": 19, "index": 19, "sourc": 19}, "objects": {"makros": [[4, 0, 1, "", "MakroParser"], [5, 0, 1, "", "Makros"], [11, 4, 1, "", "translate_file"], [12, 4, 1, "", "translate_folder"]], "makros.MakroParser": [[4, 1, 1, "", "available_macros"], [4, 1, 1, "", "current_indentation"], [4, 2, 1, "", "parse"], [4, 2, 1, "", "parse_path"], [4, 2, 1, "", "parse_string"], [4, 2, 1, "", "parse_tokens"]], "makros.Makros": [[5, 2, 1, "", "get"], [5, 2, 1, "", "get_parser"]], "makros.macro_creation": [[6, 0, 1, "", "MacroParser"], [7, 0, 1, "", "MacroTranslator"], [8, 0, 1, "", "TokenCase"], [9, 0, 1, "", "Tokens"], [10, 3, 0, "-", "pyx"]], "makros.macro_creation.MacroParser": [[6, 2, 1, "", "parse"]], "makros.macro_creation.MacroTranslator": [[7, 2, 1, "", "translate"]], "makros.macro_creation.TokenCase": [[8, 2, 1, "", "check"], [8, 2, 1, "", "string"], [8, 2, 1, "", "type"]], "makros.macro_creation.Tokens": [[9, 2, 1, "", "advance"], [9, 2, 1, "", "check"], [9, 2, 1, "", "consume"], [9, 2, 1, "", "error"], [9, 2, 1, "", "is_at_end"], [9, 2, 1, "", "match"], [9, 2, 1, "", "peek"], [9, 2, 1, "", "previous"]], "makros.macro_creation.pyx": [[10, 4, 1, "", "create_class"], [10, 4, 1, "", "create_func"], [10, 4, 1, "", "indent"], [10, 4, 1, "", "program"]]}, "objtypes": {"0": "py:class", "1": "py:attribute", "2": "py:method", "3": "py:module", "4": "py:function"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "attribute", "Python attribute"], "2": ["py", "method", "Python method"], "3": ["py", "module", "Python module"], "4": ["py", "function", "Python function"]}, "titleterms": {"contribut": 0, "get": [1, 16], "start": [1, 16], "develop": 1, "prerequisit": [1, 16, 19], "set": 1, "up": 1, "build": 1, "environ": 1, "write": [1, 16, 19], "test": 1, "macro": [1, 13, 17, 18, 19], "unit": 1, "run": 1, "makro": [2, 5, 11, 12, 14], "document": 2, "overview": 2, "content": 2, "modul": 3, "refer": 3, "makropars": 4, "macropars": 6, "macrotransl": 7, "tokencas": 8, "token": 9, "pyx": 10, "translate_fil": 11, "translate_fold": 12, "creation": 13, "core": 14, "user": 15, "guid": 15, "instal": 16, "your": 16, "first": 16, "code": 16, "us": [17, 18], "enum": 17, "namespac": 18, "custom": 19, "local": 19}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})