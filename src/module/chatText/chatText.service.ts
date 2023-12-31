import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class ChatTextService {
  private readonly openaiService;
  constructor() {
    this.openaiService = new OpenAI({
      apiKey: '',
    });
  }
  async getGenerate(prompt: string): Promise<string> {
    const response = await this.openaiService.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });
    return response;
  }
}
