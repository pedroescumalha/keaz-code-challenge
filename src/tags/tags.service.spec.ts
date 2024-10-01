import { Test, TestingModule } from "@nestjs/testing"
import { CustomPrismaModule } from "nestjs-prisma"
import { extendedPrismaClient } from "../prisma/prisma.extension"
import { TagsService } from "./tags.service"

describe("Tagsservice", () => {
	let service: TagsService

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
			providers: [TagsService],
		}).compile()

		service = module.get<TagsService>(TagsService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
