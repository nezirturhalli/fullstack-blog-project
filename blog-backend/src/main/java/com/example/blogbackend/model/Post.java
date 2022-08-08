package com.example.blogbackend.model;

import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "posts", schema = "public")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EntityListeners(AuditingEntityListener.class)
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false,name = "id")
    private Long postId;
    @Column(nullable = false)
    private String title;
    @Lob
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
    @CreatedDate
    private Instant createdOn;
    @UpdateTimestamp
    private Instant updatedOn;
    @Column
    private String username;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Post post = (Post) o;
        return postId != null && Objects.equals(postId, post.postId);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @ManyToOne(optional = false)
    private User users;

    public User getUsers() {
        return users;
    }

    public void setUsers(User users) {
        this.users = users;
    }
}
