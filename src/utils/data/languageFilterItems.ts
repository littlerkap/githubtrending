const languageFilterItems = [
  { label: "1C Enterprise" },
  { label: "4D" },
  { label: "ABAP" },
  { label: "ActionScript" },
  { label: "Ada" },
  { label: "Agda" },
  { label: "AGS Script" },
  { label: "AL" },
  { label: "Alloy" },
  { label: "Alpine Abuild" },
  { label: "AMPL" },
  { label: "AngelScript" },
  { label: "ANTLR" },
  { label: "Apex" },
  { label: "API Blueprint" },
  { label: "APL" },
  { label: "Apollo Guidance Computer" },
  { label: "AppleScript" },
  { label: "Arc" },
  { label: "ASL" },
  { label: "ASP.NET" },
  { label: "AspectJ" },
  { label: "Assembly" },
  { label: "Asymptote" },
  { label: "ATS" },
  { label: "Augeas" },
  { label: "AutoHotkey" },
  { label: "AutoIt" },
  { label: "Awk" },
  { label: "Ballerina" },
  { label: "Batchfile" },
  { label: "Befunge" },
  { label: "Bison" },
  { label: "BitBake" },
  { label: "Blade" },
  { label: "BlitzBasic" },
  { label: "BlitzMax" },
  { label: "Bluespec" },
  { label: "Boo" },
  { label: "Brainfuck" },
  { label: "Brightscript" },
  { label: "Browserslist" },
  { label: "C" },
  { label: "C#" },
  { label: "C++" },
  { label: "C2hs Haskell" },
  { label: "Capn Proto" },
  { label: "CartoCSS" },
  { label: "Ceylon" },
  { label: "Chapel" },
  { label: "Charity" },
  { label: "ChucK" },
  { label: "Cirru" },
  { label: "Clarion" },
  { label: "Classic ASP" },
  { label: "Clean" },
  { label: "Click" },
  { label: "CLIPS" },
  { label: "Clojure" },
  { label: "CMake" },
  { label: "COBOL" },
  { label: "CodeQL" },
  { label: "CoffeeScript" },
  { label: "ColdFusion" },
  { label: "ColdFusion CFC" },
  { label: "Common Lisp" },
  { label: "Common Workflow Language" },
  { label: "Component Pascal" },
  { label: "Cool" },
  { label: "Coq" },
  { label: "Crystal" },
  { label: "CSON" },
  { label: "Csound" },
  { label: "Csound Document" },
  { label: "Csound Score" },
  { label: "CSS" },
  { label: "Cuda" },
  { label: "CWeb" },
  { label: "Cycript" },
  { label: "Cython" },
  { label: "D" },
  { label: "Dafny" },
  { label: "Dart" },
  { label: "DataWeave" },
  { label: "Dhall" },
  { label: "DIGITAL Command Language" },
  { label: "DM" },
  { label: "Dockerfile" },
  { label: "Dogescript" },
  { label: "DTrace" },
  { label: "Dylan" },
  { label: "E" },
  { label: "eC" },
  { label: "ECL" },
  { label: "ECLiPSe" },
  { label: "Eiffel" },
  { label: "EJS" },
  { label: "Elixir" },
  { label: "Elm" },
  { label: "Emacs Lisp" },
  { label: "EmberScript" },
  { label: "EQ" },
  { label: "Erlang" },
  { label: "F#" },
  { label: "F*" },
  { label: "Factor" },
  { label: "Fancy" },
  { label: "Fantom" },
  { label: "Faust" },
  { label: "Filebench WML" },
  { label: "Filterscript" },
  { label: "fish" },
  { label: "FLUX" },
  { label: "Forth" },
  { label: "Fortran" },
  { label: "Fortran Free Form" },
  { label: "FreeMarker" },
  { label: "Frege" },
  { label: "Futhark" },
  { label: "G-code" },
  { label: "Game Maker Language" },
  { label: "GAML" },
  { label: "GAMS" },
  { label: "GAP" },
  { label: "GCC Machine Description" },
  { label: "GDB" },
  { label: "GDScript" },
  { label: "Genie" },
  { label: "Genshi" },
  { label: "Gentoo Ebuild" },
  { label: "Gentoo Eclass" },
  { label: "Gherkin" },
  { label: "GLSL" },
  { label: "Glyph" },
  { label: "Gnuplot" },
  { label: "Go" },
  { label: "Golo" },
  { label: "Gosu" },
  { label: "Grace" },
  { label: "Grammatical Framework" },
  { label: "GraphQL" },
  { label: "Groovy" },
  { label: "Groovy Server Pages" },
  { label: "Hack" },
  { label: "Haml" },
  { label: "Handlebars" },
  { label: "Harbour" },
  { label: "Haskell" },
  { label: "Haxe" },
  { label: "HCL" },
  { label: "HiveQL" },
  { label: "HLSL" },
  { label: "HolyC" },
  { label: "HTML" },
  { label: "Hy" },
  { label: "HyPhy" },
  { label: "IDL" },
  { label: "Idris" },
  { label: "IGOR Pro" },
  { label: "Inform 7" },
  { label: "Inno Setup" },
  { label: "Io" },
  { label: "Ioke" },
  { label: "Isabelle" },
  { label: "Isabelle ROOT" },
  { label: "J" },
  { label: "Jasmin" },
  { label: "Java" },
  { label: "Java Server Pages" },
  { label: "JavaScript" },
  { label: "JavaScript+ERB" },
  { label: "JFlex" },
  { label: "Jison" },
  { label: "Jison Lex" },
  { label: "Jolie" },
  { label: "JSONiq" },
  { label: "Jsonnet" },
  { label: "JSX" },
  { label: "Julia" },
  { label: "Jupyter Notebook" },
  { label: "Kaitai Struct" },
  { label: "Kotlin" },
  { label: "KRL" },
  { label: "LabVIEW" },
  { label: "Lasso" },
  { label: "Latte" },
  { label: "Lean" },
  { label: "Less" },
  { label: "Lex" },
  { label: "LFE" },
  { label: "LilyPond" },
  { label: "Limbo" },
  { label: "Literate Agda" },
  { label: "Literate CoffeeScript" },
  { label: "Literate Haskell" },
  { label: "LiveScript" },
  { label: "LLVM" },
  { label: "Logos" },
  { label: "Logtalk" },
  { label: "LOLCODE" },
  { label: "LookML" },
  { label: "LoomScript" },
  { label: "LSL" },
  { label: "Lua" },
  { label: "M" },
  { label: "M4" },
  { label: "M4Sugar" },
  { label: "Macaulay2" },
  { label: "Makefile" },
  { label: "Mako" },
  { label: "Markdown" },
  { label: "Marko" },
  { label: "Mask" },
  { label: "Mathematica" },
  { label: "MATLAB" },
  { label: "Max" },
  { label: "MAXScript" },
  { label: "mcfunction" },
  { label: "Mercury" },
  { label: "Meson" },
  { label: "Metal" },
  { label: "MiniD" },
  { label: "Mirah" },
  { label: "mIRC Script" },
  { label: "MLIR" },
  { label: "Modelica" },
  { label: "Modula-2" },
  { label: "Modula-3" },
  { label: "Module Management System" },
  { label: "Monkey" },
  { label: "Moocode" },
  { label: "MoonScript" },
  { label: "Motorola 68K Assembly" },
  { label: "MQL4" },
  { label: "MQL5" },
  { label: "MTML" },
  { label: "MUF" },
  { label: "mupad" },
  { label: "Myghty" },
  { label: "NASL" },
  { label: "NCL" },
  { label: "Nearley" },
  { label: "Nemerle" },
  { label: "nesC" },
  { label: "NetLinx" },
  { label: "NetLinx+ERB" },
  { label: "NetLogo" },
  { label: "NewLisp" },
  { label: "Nextflow" },
  { label: "Nim" },
  { label: "Nit" },
  { label: "Nix" },
  { label: "NSIS" },
  { label: "Nu" },
  { label: "NumPy" },
  { label: "NWScript" },
  { label: "Objective-C" },
  { label: "Objective-C++" },
  { label: "Objective-J" },
  { label: "ObjectScript" },
  { label: "OCaml" },
  { label: "Odin" },
  { label: "Omgrofl" },
  { label: "ooc" },
  { label: "Opa" },
  { label: "Opal" },
  { label: "Open Policy Agent" },
  { label: "OpenCL" },
  { label: "OpenEdge ABL" },
  { label: "OpenQASM" },
  { label: "OpenRC runscript" },
  { label: "OpenSCAD" },
  { label: "Ox" },
  { label: "Oxygene" },
  { label: "Oz" },
  { label: "P4" },
  { label: "Pan" },
  { label: "Papyrus" },
  { label: "Parrot" },
  { label: "Parrot Assembly" },
  { label: "Parrot Internal Representation" },
  { label: "Pascal" },
  { label: "Pawn" },
  { label: "Pep8" },
  { label: "Perl" },
  { label: "PHP" },
  { label: "PicoLisp" },
  { label: "PigLatin" },
  { label: "Pike" },
  { label: "PLpgSQL" },
  { label: "PLSQL" },
  { label: "PogoScript" },
  { label: "Pony" },
  { label: "PostScript" },
  { label: "POV-Ray SDL" },
  { label: "PowerBuilder" },
  { label: "PowerShell" },
  { label: "Prisma" },
  { label: "Processing" },
  { label: "Prolog" },
  { label: "Propeller Spin" },
  { label: "Pug" },
  { label: "Puppet" },
  { label: "PureBasic" },
  { label: "PureScript" },
  { label: "Python" },
  { label: "Python console" },
  { label: "q" },
  { label: "Q#" },
  { label: "QMake" },
  { label: "QML" },
  { label: "Qt Script" },
  { label: "Quake" },
  { label: "R" },
  { label: "Racket" },
  { label: "Ragel" },
  { label: "Raku" },
  { label: "RAML" },
  { label: "Rascal" },
  { label: "REALbasic" },
  { label: "Reason" },
  { label: "Rebol" },
  { label: "Red" },
  { label: "Redcode" },
  { label: "RenPy" },
  { label: "RenderScript" },
  { label: "ReScript" },
  { label: "REXX" },
  { label: "Ring" },
  { label: "Riot" },
  { label: "RobotFramework" },
  { label: "Roff" },
  { label: "Rouge" },
  { label: "RPC" },
  { label: "Ruby" },
  { label: "RUNOFF" },
  { label: "Rust" },
  { label: "Sage" },
  { label: "SaltStack" },
  { label: "SAS" },
  { label: "Sass" },
  { label: "Scala" },
  { label: "Scheme" },
  { label: "Scilab" },
  { label: "SCSS" },
  { label: "sed" },
  { label: "Self" },
  { label: "ShaderLab" },
  { label: "Shell" },
  { label: "ShellSession" },
  { label: "Shen" },
  { label: "Sieve" },
  { label: "Slash" },
  { label: "Slice" },
  { label: "Slim" },
  { label: "Smali" },
  { label: "Smalltalk" },
  { label: "Smarty" },
  { label: "SmPL" },
  { label: "SMT" },
  { label: "Solidity" },
  { label: "SourcePawn" },
  { label: "SQF" },
  { label: "SQLPL" },
  { label: "Squirrel" },
  { label: "SRecode Template" },
  { label: "Stan" },
  { label: "Standard ML" },
  { label: "Starlark" },
  { label: "Stata" },
  { label: "Stylus" },
  { label: "SuperCollider" },
  { label: "Svelte" },
  { label: "SVG" },
  { label: "Swift" },
  { label: "SWIG" },
  { label: "SystemVerilog" },
  { label: "Tcl" },
  { label: "Tcsh" },
  { label: "Terra" },
  { label: "TeX" },
  { label: "Thrift" },
  { label: "TI Program" },
  { label: "TLA" },
  { label: "TSQL" },
  { label: "TSX" },
  { label: "Turing" },
  { label: "Twig" },
  { label: "TXL" },
  { label: "TypeScript" },
  { label: "Unified Parallel C" },
  { label: "Unix Assembly" },
  { label: "Uno" },
  { label: "UnrealScript" },
  { label: "UrWeb" },
  { label: "V" },
  { label: "Vala" },
  { label: "VBA" },
  { label: "VBScript" },
  { label: "VCL" },
  { label: "Verilog" },
  { label: "VHDL" },
  { label: "Vim script" },
  { label: "Visual Basic .NET" },
  { label: "Volt" },
  { label: "Vue" },
  { label: "wdl" },
  { label: "WebAssembly" },
  { label: "WebIDL" },
  { label: "wisp" },
  { label: "Wollok" },
  { label: "X10" },
  { label: "xBase" },
  { label: "XC" },
  { label: "Xojo" },
  { label: "XProc" },
  { label: "XQuery" },
  { label: "XS" },
  { label: "XSLT" },
  { label: "Xtend" },
  { label: "Yacc" },
  { label: "YAML" },
  { label: "YARA" },
  { label: "YASnippet" },
  { label: "ZAP" },
  { label: "Zeek" },
  { label: "ZenScript" },
  { label: "Zephir" },
  { label: "Zig" },
  { label: "ZIL" },
  { label: "Zimpl" },
  { label: "Unknown languages" },
  { label: "ABNF" },
  { label: "Adobe Font Metrics" },
  { label: "Altium Designer" },
  { label: "Ant Build System" },
  { label: "ApacheConf" },
  { label: "AsciiDoc" },
  { label: "ASN.1" },
  { label: "BibTeX" },
  { label: "C-ObjDump" },
  { label: "Cabal Config" },
  { label: "Closure Templates" },
  { label: "Cloud Firestore Security Rules" },
  { label: "COLLADA" },
  { label: "CoNLL-U" },
  { label: "Cpp-ObjDump" },
  { label: "Creole" },
  { label: "CSV" },
  { label: "cURL Config" },
  { label: "D-ObjDump" },
  { label: "Darcs Patch" },
  { label: "desktop" },
  { label: "Diff" },
  { label: "dircolors" },
  { label: "DirectX 3D File" },
  { label: "DNS Zone" },
  { label: "Eagle" },
  { label: "Easybuild" },
  { label: "EBNF" },
  { label: "Ecere Projects" },
  { label: "EditorConfig" },
  { label: "Edje Data Collection" },
  { label: "edn" },
  { label: "EML" },
  { label: "FIGlet Font" },
  { label: "Formatted" },
  { label: "GEDCOM" },
  { label: "Gerber Image" },
  { label: "Gettext Catalog" },
  { label: "Git Attributes" },
  { label: "Git Config" },
  { label: "Glyph Bitmap Distribution Format" },
  { label: "GN" },
  { label: "Gradle" },
  { label: "Graph Modeling Language" },
  { label: "Graphviz (DOT)" },
  { label: "HAProxy" },
  { label: "HTML+Django" },
  { label: "HTML+ECR" },
  { label: "HTML+EEX" },
  { label: "HTML+ERB" },
  { label: "HTML+PHP" },
  { label: "HTML+Razor" },
  { label: "HTTP" },
  { label: "HXML" },
  { label: "Ignore List" },
  { label: "INI" },
  { label: "IRC log" },
  { label: "Java Properties" },
  { label: "JSON" },
  { label: "JSON with Comments" },
  { label: "JSON5" },
  { label: "JSONLD" },
  { label: "KiCad Layout" },
  { label: "KiCad Legacy Layout" },
  { label: "KiCad Schematic" },
  { label: "Kit" },
  { label: "Linker Script" },
  { label: "Linux Kernel Module" },
  { label: "Liquid" },
  { label: "LTspice Symbol" },
  { label: "Maven POM" },
  { label: "MediaWiki" },
  { label: "Microsoft Developer Studio Project" },
  { label: "Muse" },
  { label: "nanorc" },
  { label: "Nginx" },
  { label: "Ninja" },
  { label: "NL" },
  { label: "NPM Config" },
  { label: "ObjDump" },
  { label: "Object Data Instance Notation" },
  { label: "OpenStep Property List" },
  { label: "OpenType Feature File" },
  { label: "Org" },
  { label: "Pic" },
  { label: "Pickle" },
  { label: "PlantUML" },
  { label: "Pod" },
  { label: "Pod 6" },
  { label: "PostCSS" },
  { label: "Proguard" },
  { label: "Protocol Buffer" },
  { label: "Public Key" },
  { label: "Pure Data" },
  { label: "Python traceback" },
  { label: "Raw token data" },
  { label: "RDoc" },
  { label: "Readline Config" },
  { label: "Regular Expression" },
  { label: "reStructuredText" },
  { label: "Rich Text Format" },
  { label: "RMarkdown" },
  { label: "Roff Manpage" },
  { label: "RPM Spec" },
  { label: "Scaml" },
  { label: "SPARQL" },
  { label: "Spline Font Database" },
  { label: "SQL" },
  { label: "SSH Config" },
  { label: "STON" },
  { label: "SubRip Text" },
  { label: "SugarSS" },
  { label: "Tea" },
  { label: "Texinfo" },
  { label: "Text" },
  { label: "Textile" },
  { label: "TOML" },
  { label: "Turtle" },
  { label: "Type Language" },
  { label: "Unity3D Asset" },
  { label: "Vim Help File" },
  { label: "Vim Snippet" },
  { label: "Wavefront Material" },
  { label: "Wavefront Object" },
  { label: "Web Ontology Language" },
  { label: "WebVTT" },
  { label: "Wget Config" },
  { label: "Windows Registry Entries" },
  { label: "World of Warcraft Addon Data" },
  { label: "X BitMap" },
  { label: "X Font Directory Index" },
  { label: "X PixMap" },
  { label: "XCompose" },
  { label: "XML" },
  { label: "XML Property List" },
  { label: "XPages" },
  { label: "YANG" },
];
export default languageFilterItems;
