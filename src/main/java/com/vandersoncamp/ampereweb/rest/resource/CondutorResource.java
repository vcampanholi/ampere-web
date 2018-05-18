package com.vandersoncamp.ampereweb.rest.resource;import com.vandersoncamp.ampereweb.model.Condutor;import com.vandersoncamp.ampereweb.service.CondutorService;import javax.enterprise.context.RequestScoped;import javax.inject.Inject;import javax.ws.rs.*;import javax.ws.rs.core.MediaType;import javax.ws.rs.core.Response;@Path("/condutores")@RequestScopedpublic class CondutorResource {    @Inject    private CondutorService service;    @GET    @Path("{id}")    @Produces(MediaType.APPLICATION_JSON)    public Response buscar(@PathParam("id") Long id) {        Condutor condutor = service.buscar(id);        if (condutor == null) {            return Response.status(Response.Status.NOT_FOUND).build();        }        return Response.ok(condutor).build();    }    @GET    @Produces(MediaType.APPLICATION_JSON)    public Response pesquisar(            @QueryParam("filterField") String filterField,            @QueryParam("filterValue") String filterValue,            @QueryParam("order") String order) {        return Response.ok(service.pesquisar(filterField, filterValue, order)).build();    }    @POST    @Produces(MediaType.APPLICATION_JSON)    @Consumes(MediaType.APPLICATION_JSON)    public Response criar(Condutor condutor) {        service.criar(condutor);        return Response.status(Response.Status.CREATED).entity(condutor).build();    }    @PUT    @Path("{id}")    @Produces(MediaType.APPLICATION_JSON)    @Consumes(MediaType.APPLICATION_JSON)    public Response atualizar(Condutor condutor, @PathParam("id") Long id) {        if (!id.equals(condutor.getId())) {            return Response.status(Response.Status.BAD_REQUEST).entity("ID do objeto difere do ID da URL").build();        }        service.atualizar(condutor);        return Response.status(Response.Status.OK).entity(condutor).build();    }    @DELETE    @Path("{id}")    public Response excluir(@PathParam("id") Long id) {        service.excluir(id);        return Response.status(Response.Status.NO_CONTENT).build();    }}