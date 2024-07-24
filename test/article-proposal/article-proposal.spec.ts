import { Test, TestingModule } from '@nestjs/testing';
import {ArticleProposalService} from "../../src/article-proposal/article-proposal.service";
import {INestApplication} from "@nestjs/common";
import {AppModule} from "../../src/app.module";

describe('ArticleProposalService', () => {
  let app: INestApplication;
  let service: ArticleProposalService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    service = app.get<ArticleProposalService>(ArticleProposalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
