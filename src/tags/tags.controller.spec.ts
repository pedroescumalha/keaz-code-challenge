import { Logger } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing"
import { CustomPrismaModule } from "nestjs-prisma"
import { extendedPrismaClient } from "../prisma/prisma.extension"
import { TagsController } from "./tags.controller"
import { TagsService } from "./tags.service"

describe("Tagscontroller", () => {
	let controller: TagsController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				CustomPrismaModule.forRootAsync({
					name: "PrismaService",
					isGlobal: true,
					useFactory: () => {
						return extendedPrismaClient
					},
				}),
			],
			controllers: [TagsController],
			providers: [Logger, TagsService],
		}).compile()

		controller = module.get<TagsController>(TagsController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
