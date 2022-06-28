import token
import tokenize
from typing import List


class TokenCase:
    """Used to check if a token matches specific details
    """

    token_type: int = None
    token_string: str = None

    def type(self, new_type: int):
        """Specifies the token type to check against

        Args:
            new_type (int): The token type to check against

        Returns:
            TokenCase: This TokenCase instance, used for checking
        """
        self.token_type = new_type
        return self

    def string(self, new_str: str):
        """Specifies a string to be checked against to see if it matches

        Args:
            new_str (str): The string to check against

        Returns:
            TokenCase: This TokenCase instance, used for chaining
        """

        self.token_string = new_str
        return self

    def check(self, token: tokenize.TokenInfo) -> bool:
        """Checks a specific token against the information provided here

        Args:
            token (tokenize.TokenInfo): The token to check against

        Returns:
            bool: If it matches or not
        """

        if self.token_type is not None and self.token_type != token.type:
            return False

        if self.token_string is not None and self.token_string != token.string:
            return False

        return True


class Tokens:
    """A helper token for working with macros"""

    current_token: tokenize.TokenInfo = None
    current_token_index: int = 0

    def __init__(self, tokens: List[tokenize.TokenInfo], filename: str):
        self.filename = filename

        # Filter logical newlines and comments, as they are not handled well by
        # the macros that are implemented and provide no good value
        self.internal_token = list(
            filter(lambda x: x.type != token.NL and x.type != token.COMMENT,
                   tokens))

    def error(self, token_something_else: tokenize.TokenInfo, message: str):
        # TODO: Better error handling
        raise Exception(
            f"At line {token_something_else.start[1]} ({token.tok_name[token_something_else.type]}['{token_something_else.string}']) in {self.filename}, {message}\n\t|{token_something_else.line}"
        )

    def peek(self) -> tokenize.TokenInfo:
        """
        Returns what the next token will be without modifying the current toke
        in the buffer
        """
        return self.internal_token[self.current_token_index]

    def previous(self) -> tokenize.TokenInfo:
        return self.internal_token[self.current_token_index - 1]

    def advance(self) -> tokenize.TokenInfo:
        if not self.is_at_end():
            self.current_token_index += 1

        return self.previous()

    def is_at_end(self) -> bool:
        """
        Returns true if the next token is an end marker
        """
        return self.peek().type == token.ENDMARKER

    # ==============
    # Code functions
    # ==============

    def consume(self, checker: TokenCase,
                failure_message: str) -> tokenize.TokenInfo:
        if self.check(checker):
            return self.advance()

        self.error(self.peek(), failure_message)

    def check(self, checker: TokenCase) -> bool:
        if self.is_at_end():
            return False

        return checker.check(self.peek())

    def match(self, *types: TokenCase) -> bool:
        for checker in types:
            if checker.check(self.peek()):
                self.advance()
                return True

        return False

    def __iter__(self):
        """The actual iterator is created in the __next__ function."""
        return self

    def __next__(self) -> tokenize.TokenInfo:
        """
        This allows for me to use for loops on this class and everything will
        work mostly perfectly
        """
        if self.is_at_end():
            raise StopIteration

        return self.advance()