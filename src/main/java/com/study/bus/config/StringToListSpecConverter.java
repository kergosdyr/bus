package com.study.bus.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import java.io.IOException;
import java.util.Collection;
import java.util.List;
import org.springframework.core.convert.converter.Converter;
import org.springframework.core.convert.converter.ConverterFactory;

public class StringToListSpecConverter<T> implements ConverterFactory<String, List<?>> {


    @Override
    public <T extends List<?>> Converter<String, T> getConverter(Class<T> targetType) {
            return new StringToListConverter<>(targetType);
    }

    public class StringToListConverter<T extends List<?>> implements Converter<String, T> {

        private final Class<T> targetType;

        public StringToListConverter(Class<T> targetType) {
            this.targetType = targetType;
        }

        @Override
        public T convert(String source) {
            ObjectMapper mapper = new ObjectMapper();
            try {
                CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, targetType);
                return  mapper.readValue(source, listType);
            } catch (IOException e) {
                throw new IllegalArgumentException(e);
            }
        }
    }


}