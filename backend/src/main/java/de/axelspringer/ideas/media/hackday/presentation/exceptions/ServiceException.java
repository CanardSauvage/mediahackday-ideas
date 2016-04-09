
package de.axelspringer.ideas.media.hackday.presentation.exceptions;

public class ServiceException extends RuntimeException {

    private final ErrorCodeType errorCode;

    public ServiceException(String message, Throwable cause, ErrorCodeType errorCode) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public ServiceException(String message, ErrorCodeType errorCode) {
        this(message, null, errorCode);
    }

    public ErrorCodeType getErrorCode() {
        return errorCode;
    }
}
