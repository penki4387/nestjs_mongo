import { Controller, Get, Post, Patch, Put, Delete, Query, Param, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postService: PostsService
    ) {}

    @Get()
    public getAllPosts() {
        return this.postService.findAll();
    }

    @Get(':userId')
    public getPostsByUserId(@Param('userId') userId: string) {
        return this.postService.findAll(userId);
    }
}
