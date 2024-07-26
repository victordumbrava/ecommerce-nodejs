import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { SearchDto } from "./dto/search.dto";

@Controller('products')
export class ProductsController {

    @Get('all')
    findAll() {
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
    }

    @Post()
    search(@Body() searchDto: SearchDto) {
    }

}