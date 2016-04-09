package de.axelspringer.ideas.media.hackday.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JSON {

    private static ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    public static String stringify(final JsonNode node) throws JsonProcessingException {
        final Object obj = OBJECT_MAPPER.treeToValue(node, Object.class);
        final String json = OBJECT_MAPPER.writeValueAsString(obj);
        return json;
    }
}
