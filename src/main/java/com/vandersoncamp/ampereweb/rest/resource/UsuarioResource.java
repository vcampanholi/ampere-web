package com.vandersoncamp.ampereweb.rest.resource;import com.vandersoncamp.ampereweb.model.Usuario;import com.vandersoncamp.ampereweb.rest.AbstractCrudResource;import com.vandersoncamp.ampereweb.service.AbstractCrudService;import com.vandersoncamp.ampereweb.service.UsuarioService;import javax.inject.Inject;import javax.ws.rs.Path;@Path("usuarios")public class UsuarioResource extends AbstractCrudResource<Usuario> {    @Inject    private UsuarioService service;    @Override    protected AbstractCrudService<Usuario> getService() {        return service;    }}