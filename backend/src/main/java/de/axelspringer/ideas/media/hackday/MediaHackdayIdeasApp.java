package de.axelspringer.ideas.media.hackday;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class MediaHackdayIdeasApp {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(MediaHackdayIdeasApp.class, args);
    }
}
