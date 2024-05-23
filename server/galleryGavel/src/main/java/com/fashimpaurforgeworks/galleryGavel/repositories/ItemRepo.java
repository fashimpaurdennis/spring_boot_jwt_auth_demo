package com.fashimpaurforgeworks.galleryGavel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fashimpaurforgeworks.galleryGavel.entities.Item;

public interface ItemRepo extends JpaRepository <Item, Long> {

}
