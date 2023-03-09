import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("/welcome")
  getRootRoute() {
    return "Hi there!";
  }

  @Get("/bye")
  getByeRoute() {
    return "Bye!";
  }
}
