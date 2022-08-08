package com.example.blogbackend.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "users", schema = "public")
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false,name = "id")
    private Long userId;
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;
    @Email
    @Column(nullable = false, unique = true)
    private String email;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_posts",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "post_id"))
    @ToString.Exclude
    private List<Post> postList = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return userId != null && Objects.equals(userId, user.userId);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
