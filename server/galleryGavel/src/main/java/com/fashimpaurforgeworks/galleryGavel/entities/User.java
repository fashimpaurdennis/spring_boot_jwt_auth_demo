package com.fashimpaurforgeworks.galleryGavel.entities;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Name is required.")
    @Size(min = 3, max = 30, message = "Name must be between 3 and 30 characters.")
    private String name;

    @NotEmpty(message = "Email is required.")
    @Email(message = "Please enter a valid email.")
    private String email;

    @NotEmpty(message = "Street Address is required.")
    @Size(min = 3, max = 128, message = "Street Address must be between 8 and 128 characters.")
    private String streetAddress;

    @NotEmpty(message = "City is required.")
    @Size(min = 3, max = 128, message = "")
    private String city;

    @NotEmpty(message = "State is required.")
    @Size(min = 2, max = 32, message = "State must be between 2 and 32 characters.")
    private String state;

    @NotEmpty(message = "Zip Code is required.")
    private String zipCode;

    @NotEmpty(message = "Password is required.")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,}$", 
             message = "Password must meet the criteria.")
    private String password;

    @Transient
    @NotEmpty(message = "Confirm Password is required.")
    @Size(min = 4, max = 128, message = "Confirm Password must be between 8 and 128 characters.")
    private String confirm;

    private String role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role));
    }
    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
