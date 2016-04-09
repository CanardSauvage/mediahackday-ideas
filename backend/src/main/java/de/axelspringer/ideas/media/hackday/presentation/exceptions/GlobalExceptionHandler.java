
package de.axelspringer.ideas.media.hackday.presentation.exceptions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    private final static Logger LOG = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers,
                                                             HttpStatus status, WebRequest request) {

        ServiceError serviceError = new ServiceError(ex.getMessage(), ErrorCodeType.INTERNAL_ERROR);
        return new ResponseEntity<Object>(serviceError, headers, status);
    }

    @ExceptionHandler({ServiceException.class})
    public final ResponseEntity<Object> handleServiceException(ServiceException ex, WebRequest request) {
        LOG.debug(ex.getMessage());
        ServiceError serviceError = new ServiceError(ex.getMessage(), ex.getErrorCode());
        return new ResponseEntity<Object>(serviceError, new HttpHeaders(), HttpStatus.valueOf(ex.getErrorCode()
                .getStatusCode()));
    }
}
