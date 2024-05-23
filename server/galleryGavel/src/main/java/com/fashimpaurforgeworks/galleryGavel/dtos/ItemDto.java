package com.fashimpaurforgeworks.galleryGavel.dtos;

import com.fashimpaurforgeworks.galleryGavel.entities.Item;
import com.fashimpaurforgeworks.galleryGavel.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ItemDto {

    private int statusCode;
    private String error;
    private String message;
    private String name;
    private String description;
    private Item item;
    private User owner;
}
