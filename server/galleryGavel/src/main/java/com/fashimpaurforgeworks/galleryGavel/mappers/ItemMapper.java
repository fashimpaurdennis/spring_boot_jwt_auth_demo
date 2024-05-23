package com.fashimpaurforgeworks.galleryGavel.mappers;

import org.springframework.stereotype.Component;

import com.fashimpaurforgeworks.galleryGavel.dtos.ItemDto;
import com.fashimpaurforgeworks.galleryGavel.entities.Item;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ItemMapper {


    public Item convertToEntity(ItemDto itemDto) {
        Item newItem = new Item();

        newItem.setName(itemDto.getName());
        newItem.setDescription(itemDto.getDescription());

        return newItem;
    }

}
