import { Logger, Module } from "@nestjs/common"
import { GroupsModule } from "src/groups/groups.module"
import { TagsModule } from "../tags/tags.module"
import { ContactsController } from "./contacts.controller"
import { ContactsService } from "./contacts.service"

@Module({
	imports: [GroupsModule, TagsModule],
	controllers: [ContactsController],
	providers: [ContactsService, ContactsController, Logger],
	exports: [ContactsService, ContactsController],
})
export class ContactsModule {}
