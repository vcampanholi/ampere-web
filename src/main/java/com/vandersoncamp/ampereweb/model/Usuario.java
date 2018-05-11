package com.vandersoncamp.ampereweb.model;import com.vandersoncamp.ampereweb.util.EntityID;import javax.persistence.*;import java.io.Serializable;@Entity@Table(name = "usuarios")@SequenceGenerator(name = "seq_usuarios", sequenceName = "seq_usuarios", initialValue = 1, allocationSize = 1)public class Usuario implements Serializable, EntityID {    @Id    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_usuarios")    private Long id;    @Column(name = "nome", length = 255, nullable = false)    private String nome;    @Column(name = "email", nullable = false)    private String email;    @Column(name = "hash_code")    private String hashCode;    @Override    public Long getId() {        return id;    }    public void setId(Long id) {        this.id = id;    }    public String getNome() {        return nome;    }    public void setNome(String nome) {        this.nome = nome;    }    public String getEmail() {        return email;    }    public void setEmail(String email) {        this.email = email;    }    public String getHashCode() {        return hashCode;    }    public void setHashCode(String hashCode) {        this.hashCode = hashCode;    }}