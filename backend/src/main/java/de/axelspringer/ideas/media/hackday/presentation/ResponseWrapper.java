package de.axelspringer.ideas.media.hackday.presentation;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseWrapper<T> extends ResponseEntity<T> {

    public ResponseWrapper(T body) {
        super(body, HttpStatus.OK);
    }
}
