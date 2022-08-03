from abc import ABC, abstractmethod

from makros.tokens import Tokens


class MacroParser(ABC):
    """
    This is a base class for you to implement! You need to fill out all of the 
    attached methods to make it work.

    Note: You must name the class that extends this ``Parser`` or else it will
    be picked up by makros
    """

    @abstractmethod
    def parse(self, tokens: Tokens) -> any:  # type: ignore
        """This method is called to parse the tokens provided to it. It should
        parse all of the tokens required and then return once it has reached the
        end of the macro

        Args:
            tokens (Tokens): The tokens that should be parsed

        Returns:
            any: The AST that is output by the parser. This will be passed into the translator later.
        """
        pass


class MacroTranslator(ABC):
    """
    This is the base class of your translator. You should implement all of the
    methods defined on it youself

    Note: You must name the class that extends this ``Translator`` or else it
    will not be picked up by makros

    When implementing a translator, I recommend that you implement it using the
    visitor pattern. For more information, `crafting interpreters has great documentation <https://craftinginterpreters.com/evaluating-expressions.html>`_.
    """

    @abstractmethod
    def translate(self, ast: any) -> str:  # type: ignore
        """
        This method is called to translate the AST that is returned by the parse
        method on your parser.

        Args:
            ast (any): The AST generated by your parser method

        Returns:
            str: The python code generated by your macro
        """
        pass
