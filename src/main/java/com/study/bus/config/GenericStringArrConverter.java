package com.study.bus.config;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.core.convert.converter.GenericConverter;

public class GenericStringArrConverter implements GenericConverter {


    @Override
    public Set<ConvertiblePair> getConvertibleTypes() {
        return Collections.singleton(new ConvertiblePair(String[].class, List.class));
    }

    @Override
    public Object convert(
        Object source,
        TypeDescriptor sourceType,
        TypeDescriptor targetType
    ) {
        Class<?> realType = targetType.getElementTypeDescriptor()
            .getType();
        String[] sourceArr = (String[]) source;
        return Arrays.stream(sourceArr)
            .map(s -> {
                try {
                    ObjectMapper objectMapper = new ObjectMapper();
                    objectMapper.setVisibility(PropertyAccessor.FIELD, Visibility.ANY);
                    return objectMapper.readValue(s, realType);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                return null;
            })
            .collect(Collectors.toList());


    }
}

