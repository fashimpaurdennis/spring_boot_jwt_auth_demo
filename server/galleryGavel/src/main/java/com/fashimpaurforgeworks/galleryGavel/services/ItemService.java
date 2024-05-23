package com.fashimpaurforgeworks.galleryGavel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.fashimpaurforgeworks.galleryGavel.dtos.ItemDto;
import com.fashimpaurforgeworks.galleryGavel.entities.Item;
import com.fashimpaurforgeworks.galleryGavel.entities.User;
import com.fashimpaurforgeworks.galleryGavel.mappers.ItemMapper;
import com.fashimpaurforgeworks.galleryGavel.repositories.ItemRepo;

@Service
public class ItemService {

    @Autowired
    private ItemRepo itemRepo;

    @Autowired
    private ItemMapper itemMapper;

    @Autowired
    private UserService userService;

    public ItemDto createItem(ItemDto itemDto) {
        ItemDto res = new ItemDto();

        try {
            Item newItem = itemMapper.convertToEntity(itemDto);

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            String email = authentication.getName();
            User owner = userService.getUser(email);
            newItem.setOwner(owner);

            Item savedItem = itemRepo.save(newItem);
            res.setItem(savedItem);
            res.setStatusCode(200);
            res.setDescription("Item successfully saved.");
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setMessage(e.getMessage());
        }

        return res;
    }

}
