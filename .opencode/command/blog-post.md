---
description: Create a comprehensive, SEO-optimized blog post with images using an agentic workflow
agent: seo-research-agent
model: openrouter/openai/gpt-4o
---

Create a comprehensive, SEO-optimized blog post about "$ARGUMENTS" using an orchestrated multi-agent workflow.

**WORKFLOW EXECUTION:**

**Phase 1: SEO Research**
@seo-research-agent - Analyze the topic "$ARGUMENTS" and provide:
- Primary and secondary keywords with search volume/difficulty
- Search intent classification  
- Content angle strategy
- Traffic potential estimation

**Phase 2: Competitive Analysis** 
@competitive-analysis-agent - Using the keywords from Phase 1:
- Analyze top 3-4 ranking competitors
- Identify content gaps and opportunities
- Map content structure patterns
- Generate differentiation strategy

**Phase 3: Content Creation**
@content-writer-agent - Using insights from Phases 1-2:
- Create comprehensive outline
- Write 1500+ word article with natural keyword integration
- Include current examples, statistics, and expert insights
- Format in markdown with proper heading structure
- Cite all sources

**Phase 4: Visual Enhancement**
@image-search-agent - Using the completed article:
- Identify optimal image placement locations
- Search for contextually relevant, high-quality images
- Generate descriptive alt text and engaging captions
- Integrate images into markdown format

**QUALITY REQUIREMENTS:**
✅ 1500+ words of valuable content
✅ Natural keyword integration (1-2% density)
✅ Clear H1/H2/H3 heading structure
✅ 3-5 relevant, high-quality images
✅ Current data and statistics (2024)
✅ Proper source citations
✅ SEO-optimized title and meta-friendly format

**OUTPUT FORMAT:**
Final markdown file ready for web publication with embedded images, proper citations, and complete SEO optimization.