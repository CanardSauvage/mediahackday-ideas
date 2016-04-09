
package de.axelspringer.ideas.media.hackday.presentation.exceptions;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ServiceError {

    private String errorMessage;

    private ErrorCodeType errorCode;

    public ServiceError() {
        // default constructor
    }

    public ServiceError(String errorMessage, ErrorCodeType errorCode) {
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public ErrorCodeType getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(ErrorCodeType errorCode) {
        this.errorCode = errorCode;
    }
}
