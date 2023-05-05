package com.study.bus.controller;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BusControllerTest {

    @PostMapping("/bus")
    public String bus(
        @ModelAttribute Bus bus
    ) {
        System.out.println("bus = " + bus);

        return "index";
    }

    @AllArgsConstructor
    public static class Bus {

        private String name;

        private String number;

        List<BusStation> busStations;


        public static class BusStation {

            private String name;

            private String number;

        }


    }
}
