package com.study.bus.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.Collection;
import org.springframework.core.convert.converter.Converter;
import org.springframework.core.convert.converter.ConverterFactory;

public class StringToCollectionConverter implements ConverterFactory<String, Collection> {

    @Override
    public <T extends Collection> Converter<String, T> getConverter(Class<T> targetType) {
        return new StringToCollection<>(targetType);
    }


    public static class StringToCollection<T extends Collection> implements Converter<String, T> {

        private final Class<T> targetType;

        public StringToCollection(Class<T> targetType) {
            this.targetType = targetType;
        }


        @Override
        public T convert(String source) {
            ObjectMapper mapper = new ObjectMapper();
            try {
                return (T) mapper.readValue(source, targetType);
            } catch (IOException e) {
                throw new IllegalArgumentException(e);
            }

        }
    }


}