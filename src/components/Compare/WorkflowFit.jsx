'use client';

import { useState } from 'react';
import { workflowTasks } from './compareData';
import { ArrowIcon, CheckIcon, FeatureIcon } from './Icons';

export default function WorkflowFit({ first, second }) {
  const [activeKey, setActiveKey] = useState('ideation');
  const task = workflowTasks.find((item) => item.key === activeKey);

  const rows = [first, second]
    .map((tool) => ({ tool, score: tool.workflow[task.key] }))
    .sort((a, b) => b.score - a.score);
  const [best] = rows;

  return (
    <section className="bg-surface-alt py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-15">
        <p className="font-(family-name:--font-manrope) text-[10px] font-semibold uppercase tracking-[0.5px] text-brand-primary">
          01 · Workflow fit
        </p>
        <h2 className="pt-2 font-(family-name:--font-sora) text-[26px] font-bold text-text-primary sm:text-[30px]">
          Which tool fits the work?
        </h2>
        <p className="pt-2 font-(family-name:--font-manrope) text-[13px] text-text-secondary">
          Select the task closest to your day. The comparison changes around the
          outcomes that matter for that workflow.
        </p>

        <div className="mt-8 grid overflow-hidden rounded-md border border-border-default lg:grid-cols-[640fr_680fr]">
          {/* Task list */}
          <ul role="tablist" aria-label="Workflow tasks" className="bg-white">
            {workflowTasks.map((item) => {
              const isActive = item.key === activeKey;
              return (
                <li key={item.key} className="border-b border-border-default last:border-b-0">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveKey(item.key)}
                    className={`flex min-h-[86px] w-full items-center gap-4 px-6 text-left transition-colors ${
                      isActive ? 'bg-tint-ice' : 'hover:bg-state-hover'
                    }`}
                  >
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-md border ${
                        isActive
                          ? 'border-brand-primary/40 bg-white text-brand-primary'
                          : 'border-border-default text-text-secondary'
                      }`}
                    >
                      <FeatureIcon name={item.icon} className="h-4 w-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-(family-name:--font-manrope) text-[14px] font-semibold text-text-primary">
                        {item.title}
                      </span>
                      <span className="block pt-1 font-(family-name:--font-manrope) text-[12px] text-text-muted">
                        {item.subtitle}
                      </span>
                    </span>
                    <ArrowIcon className="h-4 w-4 shrink-0 text-text-muted" />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Result panel */}
          <div
            role="tabpanel"
            className="flex flex-col bg-[#0b1220] p-8"
          >
            <p className="font-(family-name:--font-manrope) text-[10px] font-semibold uppercase tracking-[0.5px] text-brand-primary">
              Best fit · {task.label}
            </p>
            <h3 className="pt-3 font-(family-name:--font-sora) text-[30px] font-bold leading-tight text-white">
              {best.tool.name}
            </h3>
            <p className="pt-2 font-(family-name:--font-manrope) text-[14px] text-text-on-dark-muted">
              {task.summary}
            </p>

            <div className="flex flex-col gap-7 pt-10">
              {rows.map(({ tool, score }, index) => {
                const isBest = index === 0;
                return (
                  <div key={tool.id}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-(family-name:--font-manrope) text-[13px] font-semibold text-white">
                        {tool.name}
                      </span>
                      <span
                        className={`font-(family-name:--font-sora) font-bold ${
                          isBest ? 'text-[24px] text-brand-primary' : 'text-[20px] text-text-on-dark-muted'
                        }`}
                      >
                        {score}
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${isBest ? 'bg-brand-primary' : 'bg-white'}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-auto flex items-center gap-2 pt-8 font-(family-name:--font-manrope) text-[11px] text-text-on-dark-muted">
              <CheckIcon className="h-3 w-3 text-brand-primary" />
              Based on task completion, quality and workflow friction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
