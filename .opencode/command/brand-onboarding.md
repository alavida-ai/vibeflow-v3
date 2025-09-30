---
description: Complete brand strategy development with human-in-the-loop discovery process
agent: delivery-manager
---
Complete a comprehensive brand strategy development for the user using a human-in-the-loop discovery process that involves guided interviews and validation steps.

**Objective:** populated versions of the strategy template files created in the `/strategy/` folder.

**WORKFLOW EXECUTION:**
This is a human-in-the-loop workflow requiring user interaction at each phase. Delegate to subagents where specified, but pause for user input and validation before proceeding to next phases.

**Phase 1: Brand Discovery Interview**
**Human-in-the-Loop Required**: Yes
Conduct a brand discovery interview:
- Ask core questions one at a time about mission, vision, values, emotional north star, and brand mantra
- Wait for user responses and ask follow-up questions for deeper insights
- Use probing questions like "Can you give me a specific example?" and "What does that look like in practice?"
- Continue until user confirms elements feel authentic to their brand

**Phase 2: Audience Research & Validation** 
**Human-in-the-Loop Required**: Yes
Define primary audience through interview:
- Ask questions to define demographics and psychographics
- Identify functional and emotional jobs the audience "hires" the brand for
- Probe deeper with questions about specific problem descriptions, value of solutions, and competitors
- Validate audience locations and market demand
- Continue until user can picture their ideal customer as a real person
- Identify top 3 goals/desired outcomes the user wants to achieve with their brand
- Identify top 3 pain poitns/barriers

**Phase 3: Competitive Analysis & Positioning**
**Human-in-the-Loop Required**: Yes  
Delegate to @competitive-analysis-agent - Map competitive landscape using Perplexity and Firecrawl tools:
- Analyze 3 specific competitors with strengths/weaknesses
- Identify content gaps competitors are filling
- Find unique positioning opportunities for the user
- Present findings and get user validation on positioning strategy

**Phase 4: Content Strategy Development**
**Human-in-the-Loop Required**: Yes
Build content strategy based on brand and audience insights:
- Define measurable annual content objective
- Create 3 content pillars mapped to brand pillars
- Determine primary channels with realistic posting frequency
- Establish 3-5 hero content formats
- Define primary conversion event and tracking method
- Get user approval on strategy before finalizing

**Phase 5: Tone & Voice Definition**
**Human-in-the-Loop Required**: Yes
Codify communication style and voice guidelines:
- Help user define unique voice and communication style
- Ask about previous work (websites, Substack, X accounts) and scrape if provided
- Define archetype and tone adjectives matching creator's personality
- Create specific vocabulary guidelines with encouraged/banned words
- Ensure guidelines are detailed enough for others to write in this voice

**Phase 6: Template Compilation & Review**
**Human-in-the-Loop Required**: Yes
Delegate to @content-writer-agent - Generate final brand templates using all previous responses:
- Create Brand Fundamentals Template (mission, vision, values, audience, positioning)
- Create Market & Content Strategy Template (competitor analysis, content pillars, channels)
- Create Tone of Voice Template (communication guidelines, examples, adaptations)
- Reference template files in /strategy/ directory
- Get user validation that templates feel authentic and actionable
- Provide implementation plan with specific next steps

## File Structure
- **Strategy Template Files**: `context/templates/strategy/`
- **Output Directory**: `/strategy/`
- **Execution Folder**: `/strategy/YYYY-MM-DD-brand-onboarding/`
- **Final Templates**: 
  - `/strategy/brand-fundamentals-template.md`
  - `/strategy/market-content-strategy-template.md`
  - `/strategy/tone-of-voice-template.md`

## Todo Template
```markdown
# Personal Brand Onboarding Execution:
**Started**: [TIMESTAMP]  
**Status**: In Progress

## Phase 1: Brand Discovery Interview
- [ ] Conduct guided brand discovery interview
- [ ] Ask core questions about mission, vision, values
- [ ] Probe for emotional north star and brand mantra
- [ ] Ask follow-up questions for deeper insights
- [ ] Get user confirmation that elements feel authentic
- [ ] **Status**: Pending
- [ ] **Human-in-Loop**: Yes - Requires user responses and validation
- [ ] **Output**: Core brand DNA elements validated by user

## Phase 2: Audience Research & Validation
- [ ] Define primary audience demographics and psychographics
- [ ] Identify functional and emotional jobs for brand
- [ ] Determine top 3 goals and pain points
- [ ] Validate audience locations and market demand
- [ ] Ensure user can picture ideal customer as real person
- [ ] **Status**: Pending
- [ ] **Dependencies**: Phase 1 brand elements
- [ ] **Human-in-Loop**: Yes - Requires audience validation
- [ ] **Output**: Detailed audience profile validated by user

## Phase 3: Competitive Analysis & Positioning
- [ ] Analyze 3 specific competitors with strengths/weaknesses
- [ ] Identify content gaps competitors are filling
- [ ] Find unique positioning opportunities
- [ ] Present findings to user for validation
- [ ] **Agent**: @competitive-analysis-agent
- [ ] **Status**: Pending
- [ ] **Dependencies**: Phase 1-2 insights
- [ ] **Human-in-Loop**: Yes - Requires positioning validation
- [ ] **Output**: Competitive analysis and unique positioning strategy

## Phase 4: Content Strategy Development
- [ ] Define measurable annual content objective
- [ ] Create 3 content pillars mapped to brand pillars
- [ ] Determine primary channels with posting frequency
- [ ] Establish 3-5 hero content formats
- [ ] Define conversion event and tracking method
- [ ] Get user approval on complete strategy
- [ ] **Status**: Pending
- [ ] **Dependencies**: Phase 1-3 insights
- [ ] **Human-in-Loop**: Yes - Requires strategy approval
- [ ] **Output**: Complete content strategy approved by user

## Phase 5: Tone & Voice Definition
- [ ] Define unique voice and communication style
- [ ] Analyze previous work if provided (websites, social media)
- [ ] Define archetype and tone adjectives
- [ ] Create vocabulary guidelines (encouraged/banned words)
- [ ] Ensure guidelines detailed enough for others to use
- [ ] **Status**: Pending
- [ ] **Dependencies**: Phase 1-4 insights
- [ ] **Human-in-Loop**: Yes - Requires voice validation
- [ ] **Output**: Complete tone and voice guidelines

## Phase 6: Template Compilation & Review
- [ ] Generate Brand Fundamentals Template
- [ ] Generate Market & Content Strategy Template  
- [ ] Generate Tone of Voice Template
- [ ] Fill templates with user's specific information
- [ ] Get user validation on authenticity and actionability
- [ ] Address any gaps or unclear areas
- [ ] Provide implementation plan with next steps
- [ ] **Status**: Pending
- [ ] **Dependencies**: All previous phases
- [ ] **Human-in-Loop**: Yes - Requires final validation
- [ ] **Output**: 3 completed templates and implementation plan

## Quality Checklist
- [ ] All core brand elements feel authentic to user
- [ ] Audience profile is specific and validated
- [ ] Competitive positioning is unique and defensible
- [ ] Content strategy is realistic and measurable
- [ ] Voice guidelines are clear and usable
- [ ] All templates are complete and actionable
- [ ] Implementation plan provides clear next steps

## Final Deliverables
- [ ] Brand Fundamentals Template saved to /strategy/
- [ ] Market & Content Strategy Template saved to /strategy/
- [ ] Tone of Voice Template saved to /strategy/
- [ ] **Status**: Pending
- [ ] **Files**: [TEMPLATE_FILES]


```

**QUALITY REQUIREMENTS:**
✅ User validates all brand elements feel authentic
✅ Audience profile is specific with clear demographics/psychographics
✅ Competitive analysis identifies unique positioning opportunities
✅ Content strategy is realistic and measurable
✅ Voice guidelines are detailed enough for others to use
✅ All templates are complete and actionable
✅ Clear implementation plan with specific next steps provided

**OUTPUT FORMAT:**
Three comprehensive template files ready for immediate brand strategy implementation, validated by the user at each step of the discovery process.