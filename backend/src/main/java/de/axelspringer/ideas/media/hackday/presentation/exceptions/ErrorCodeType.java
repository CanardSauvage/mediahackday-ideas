
package de.axelspringer.ideas.media.hackday.presentation.exceptions;

/**
 * 400 Bad Request
 * <p>
 * 402 Payment Required
 * <p>
 * 403 Forbidden
 * <p>
 * 406 Not Acceptable
 * <p>
 * 409 Conflict --> wrong assumption, like ID does not exist
 * <p>
 * 410 Gone
 * <p>
 * 412 Precondition Failed
 * <p>
 * 418 I’m a teapot
 */
public enum ErrorCodeType {

    INVALID_REQUEST_FORMAT(400),
    ENTITY_NOT_FOUND(409),
    INTERNAL_ERROR(500);

    private final int statusCode;

    ErrorCodeType(int statusCode) {
        this.statusCode = statusCode;
    }

    public int getStatusCode() {
        return statusCode;
    }
}
