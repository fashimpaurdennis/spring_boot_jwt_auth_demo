package com.fashimpaurforgeworks.galleryGavel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fashimpaurforgeworks.galleryGavel.dtos.ItemDto;
import com.fashimpaurforgeworks.galleryGavel.services.ItemService;

@RestController
@RequestMapping("/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping("/new")
    public ResponseEntity<ItemDto> create(@RequestBody ItemDto itemDto) {
        return ResponseEntity.ok(itemService.createItem(itemDto));
    }


}
