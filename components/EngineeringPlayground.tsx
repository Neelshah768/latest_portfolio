'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  RotateCcw,
  Check,
  Server,
  Database,
  ShieldCheck,
  Zap,
  Activity,
  ArrowRight,
  RefreshCw,
  HardDrive,
  Cpu,
} from 'lucide-react';
import { trackPlaygroundInteraction } from '@/lib/analytics';

export default function EngineeringPlayground() {
  const [activeDemo, setActiveDemo] = useState<'scim' | 'cache' | 'microservices' | 'nplusone'>('scim');

  // Demo 1: SCIM Flow State
  const [scimStep, setScimStep] = useState<number>(0);
  const [scimRunning, setScimRunning] = useState<boolean>(false);

  const runScimSimulation = () => {
    if (scimRunning) return;
    trackPlaygroundInteraction('scim_flow', 'simulate');
    setScimRunning(true);
    setScimStep(1);

    const timers = [
      setTimeout(() => setScimStep(2), 700),
      setTimeout(() => setScimStep(3), 1400),
      setTimeout(() => setScimStep(4), 2100),
      setTimeout(() => {
        setScimStep(5);
        setScimRunning(false);
      }, 2800),
    ];
  };

  const resetScimSimulation = () => {
    setScimStep(0);
    setScimRunning(false);
  };

  // Demo 2: Cache vs DB Simulator
  const [cacheStatus, setCacheStatus] = useState<'idle' | 'hit' | 'miss'>('idle');
  const [cacheRunning, setCacheRunning] = useState<boolean>(false);
  const [isCacheWarm, setIsCacheWarm] = useState<boolean>(true);

  const runCacheSimulation = () => {
    if (cacheRunning) return;
    trackPlaygroundInteraction('redis_demo', isCacheWarm ? 'cache_hit_test' : 'cache_miss_test');
    setCacheRunning(true);
    setCacheStatus('idle');

    setTimeout(() => {
      setCacheStatus(isCacheWarm ? 'hit' : 'miss');
      setCacheRunning(false);
    }, isCacheWarm ? 250 : 900);
  };

  // Demo 4: N+1 Profiling State
  const [nPlusOneMode, setNPlusOneMode] = useState<'before' | 'after'>('after');

  return (
    <section
      id="playground"
      aria-label="Interactive Engineering Playground"
      className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 font-medium">05 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              INTERACTIVE DEMONSTRATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            ENGINEERING PLAYGROUND
          </h2>
          <p className="text-sm text-zinc-300">
            Interactive system simulations illustrating backend mechanisms, caching tradeoffs, and latency characteristics.
          </p>
        </div>

        {/* Demo Switcher */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-xl bg-[#0e0e14] border border-[#202028] max-w-2xl">
          {[
            { id: 'scim', label: '01 · SCIM 2.0 Flow' },
            { id: 'cache', label: '02 · Cache vs DB' },
            { id: 'microservices', label: '03 · Service Topology' },
            { id: 'nplusone', label: '04 · N+1 Elimination' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveDemo(item.id as any);
                trackPlaygroundInteraction(item.id, 'switch_tab');
              }}
              className={`flex-1 py-2 px-3 text-xs font-mono font-medium rounded-lg transition-all ${
                activeDemo === item.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-[#151520]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Demonstration Workspace Container */}
        <div className="bg-[#0b0b10] border border-[#22222a] rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* SIMULATION 1: SCIM 2.0 PROVISIONING */}
          {activeDemo === 'scim' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#1c1c24] gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    SCIM 2.0 Lifecycle Auto-Provisioning Flow
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Step-by-step synchronization lifecycle triggered by an external Identity Provider (Okta / Entra ID).
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={runScimSimulation}
                    disabled={scimRunning}
                    className="px-4 py-2 text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg flex items-center gap-2 transition-all shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{scimRunning ? 'Executing...' : 'Trigger Provisioning Request'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetScimSimulation}
                    className="p-2 text-xs font-mono text-zinc-400 hover:text-white border border-[#252530] hover:border-zinc-500 rounded-lg"
                    aria-label="Reset simulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Step Visualization Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
                {[
                  { step: 1, title: 'IdP Trigger', desc: 'POST /scim/v2/Users from Okta/Entra ID' },
                  { step: 2, title: 'Bearer Auth', desc: 'OAuth2 Token & Tenant Context Resolved' },
                  { step: 3, title: 'Schema Validator', desc: 'RFC 7643 Core User Schema Validation' },
                  { step: 4, title: 'DB Commit', desc: 'Transactional SQL Insert & Tenant Isolation' },
                  { step: 5, title: 'Audit Emitted', desc: 'Security Audit Log Indexed in Elasticsearch' },
                ].map((s) => {
                  const isCurrent = scimStep === s.step;
                  const isPassed = scimStep > s.step;
                  return (
                    <div
                      key={s.step}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isCurrent
                          ? 'bg-blue-950/60 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                          : isPassed
                          ? 'bg-[#101018] border-emerald-500/40 text-emerald-300'
                          : 'bg-[#101016] border-[#20202c] text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                          Step 0{s.step}
                        </span>
                        {isPassed && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        {isCurrent && <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />}
                      </div>
                      <div className="text-xs font-semibold text-white mb-1">{s.title}</div>
                      <div className="text-[10px] leading-tight text-zinc-400">{s.desc}</div>
                    </div>
                  );
                })}
              </div>

              {/* Terminal Log Console */}
              <div className="bg-[#07070a] border border-[#1e1e26] rounded-xl p-4 font-mono text-xs text-zinc-300">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#181822] text-[10px] text-zinc-400">
                  <span>TERMINAL LOG STREAM</span>
                  <span>HTTP / SCIM 2.0 PROTOCOL</span>
                </div>
                <div className="space-y-1 text-[11px] leading-relaxed">
                  <div className="text-zinc-400">[00.000ms] Listening on /scim/v2/Users... ready.</div>
                  {scimStep >= 1 && (
                    <div className="text-blue-300">
                      [+120ms] &gt; Ingress: POST /scim/v2/Users HTTP/1.1 (Payload: {`{"userName":"engineer@enterprise.com", "active":true}`})
                    </div>
                  )}
                  {scimStep >= 2 && (
                    <div className="text-sky-300">
                      [+340ms] &gt; Spring Security: Bearer JWT Validated | TenantId: org_73s_enterprise
                    </div>
                  )}
                  {scimStep >= 3 && (
                    <div className="text-indigo-300">
                      [+510ms] &gt; RFC 7643 Schema validation: Passed (urn:ietf:params:scim:schemas:core:2.0:User)
                    </div>
                  )}
                  {scimStep >= 4 && (
                    <div className="text-emerald-300">
                      [+720ms] &gt; MySQL Transaction COMMITTED: User entity saved with generated SCIM ID
                    </div>
                  )}
                  {scimStep >= 5 && (
                    <div className="text-emerald-400 font-semibold">
                      [+850ms] &gt; Status 201 Created returned | Audit event dispatched to Elasticsearch pipeline.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 2: CACHE VS DATABASE LATENCY */}
          {activeDemo === 'cache' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#1c1c24] gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    In-Memory Cache (Redis) vs. Relational Disk Query (MySQL)
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Compare query latency and execution flow under Cache Hit vs Cache Miss conditions.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-[#12121a] p-1 rounded-lg border border-[#22222e] text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setIsCacheWarm(true)}
                      className={`px-2.5 py-1 rounded ${
                        isCacheWarm ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Cache Warm (Hit)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsCacheWarm(false)}
                      className={`px-2.5 py-1 rounded ${
                        !isCacheWarm ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Cache Cold (Miss)
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={runCacheSimulation}
                    disabled={cacheRunning}
                    className="px-4 py-2 text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg flex items-center gap-2 transition-all shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{cacheRunning ? 'Querying...' : 'Dispatch Read Request'}</span>
                  </button>
                </div>
              </div>

              {/* Latency Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Redis Card */}
                <div
                  className={`p-5 rounded-xl border transition-all ${
                    cacheStatus === 'hit'
                      ? 'bg-red-950/40 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                      : 'bg-[#0f0f15] border-[#22222e]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 text-xs font-mono text-red-400 font-semibold">
                      <Cpu className="w-4 h-4" />
                      REDIS IN-MEMORY TIER
                    </span>
                    <span className="text-xs font-mono text-zinc-400">Memory Lookup</span>
                  </div>
                  <div className="text-3xl font-mono font-bold text-white mb-1">
                    {cacheStatus === 'hit' ? '~ 1.8 ms' : '0.0 ms (Bypassed / Cold)'}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Evaluated directly in RAM. Eliminates database connection pool exhaustion and disk read I/O.
                  </p>
                </div>

                {/* MySQL Card */}
                <div
                  className={`p-5 rounded-xl border transition-all ${
                    cacheStatus === 'miss'
                      ? 'bg-amber-950/40 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                      : 'bg-[#0f0f15] border-[#22222e]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
                      <HardDrive className="w-4 h-4" />
                      MYSQL RELATIONAL DISK
                    </span>
                    <span className="text-xs font-mono text-zinc-400">Disk &amp; Index Scan</span>
                  </div>
                  <div className="text-3xl font-mono font-bold text-white mb-1">
                    {cacheStatus === 'miss' ? '~ 58.4 ms' : 'Bypassed (0 DB queries)'}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Traverses B-Tree indexes and reads disk blocks. Writes back to Redis cache on completion.
                  </p>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-3.5 rounded-lg bg-[#07070a] border border-[#1e1e26] font-mono text-xs flex items-center justify-between">
                <span className="text-zinc-400">
                  Current Simulation Result:
                </span>
                <span
                  className={`font-semibold ${
                    cacheStatus === 'hit'
                      ? 'text-emerald-400'
                      : cacheStatus === 'miss'
                      ? 'text-amber-400'
                      : 'text-zinc-500'
                  }`}
                >
                  {cacheStatus === 'hit' && '✓ CACHE HIT: Served from Redis in ~2ms. Zero DB load.'}
                  {cacheStatus === 'miss' && '⚠ CACHE MISS: Relational DB queried (~58ms), value re-cached in Redis.'}
                  {cacheStatus === 'idle' && 'Ready. Click "Dispatch Read Request" above.'}
                </span>
              </div>
            </div>
          )}

          {/* SIMULATION 3: MICROSERVICE TOPOLOGY EXPLORER */}
          {activeDemo === 'microservices' && (
            <div>
              <div className="pb-6 mb-6 border-b border-[#1c1c24]">
                <h3 className="text-lg font-bold text-white mb-1">
                  Microservice Service Topology &amp; Failure Isolation
                </h3>
                <p className="text-xs text-zinc-400">
                  Explore how bounded contexts and distributed locks prevent cascading failures.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: 'UAM Authorization Service',
                    stack: 'Java 21 · Spring Security · Redis',
                    isolation: 'Stateless Horizontal Scaling',
                    sla: 'SLA: 99.95% Availability',
                    desc: 'Evaluates RBAC/ABAC permission graphs. In case of database latency, cached permissions in Redis serve evaluations seamlessly.',
                  },
                  {
                    name: 'SCIM 2.0 Engine',
                    stack: 'Spring Boot 3 · REST · RFC 7644',
                    isolation: 'Isolated Provisioning Queue',
                    sla: 'SLA: Near Real-Time Sync',
                    desc: 'Decoupled from client-facing application traffic so high-volume employee lifecycle imports do not degrade end-user UI response times.',
                  },
                  {
                    name: 'Scheduler & ShedLock',
                    stack: 'Spring Scheduler · ShedLock',
                    isolation: 'Distributed Mutex Lock',
                    sla: 'SLA: Exactly-Once Execution',
                    desc: 'Stores synchronization locks in database/Redis. Guarantees that across all 13 SaaS clusters, batch jobs execute on exactly one node at a time.',
                  },
                ].map((svc) => (
                  <div key={svc.name} className="bg-[#0f0f15] border border-[#20202c] rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-blue-400 mb-1">{svc.stack}</div>
                      <h4 className="text-base font-bold text-white mb-2">{svc.name}</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">{svc.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-[#181822] space-y-1 text-[11px] font-mono">
                      <div className="text-emerald-400">{svc.isolation}</div>
                      <div className="text-zinc-400">{svc.sla}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SIMULATION 4: N+1 QUERY ELIMINATION & APM PROFILING */}
          {activeDemo === 'nplusone' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#1c1c24] gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    SQL N+1 Query Resolution &amp; Response Time Halving
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Concrete demonstration of the 50%+ API response time improvement achieved on 73Strings.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-[#12121a] p-1 rounded-lg border border-[#22222e] text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setNPlusOneMode('before')}
                    className={`px-3 py-1.5 rounded transition-colors ${
                      nPlusOneMode === 'before' ? 'bg-red-950 border border-red-500/40 text-red-200' : 'text-zinc-400'
                    }`}
                  >
                    Before: SQL N+1 Query Pattern
                  </button>
                  <button
                    type="button"
                    onClick={() => setNPlusOneMode('after')}
                    className={`px-3 py-1.5 rounded transition-colors ${
                      nPlusOneMode === 'after' ? 'bg-emerald-950 border border-emerald-500/40 text-emerald-200' : 'text-zinc-400'
                    }`}
                  >
                    After: Optimized Batch Join &amp; Index
                  </button>
                </div>
              </div>

              {/* Before vs After Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0f0f15] border border-[#20202c] rounded-xl p-5">
                  <span className="text-xs font-mono text-zinc-400 block mb-2">
                    QUERY EXECUTION CHARACTERISTICS
                  </span>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between py-2 border-b border-[#181822]">
                      <span className="text-zinc-400">Total SQL Statements:</span>
                      <span className={nPlusOneMode === 'before' ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                        {nPlusOneMode === 'before' ? '101 Round-Trips (1 + 100)' : '1 Single Composite Join'}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#181822]">
                      <span className="text-zinc-400">End-to-End Latency:</span>
                      <span className={nPlusOneMode === 'before' ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                        {nPlusOneMode === 'before' ? '~ 1,240 ms' : '< 48 ms (50%+ reduction)'}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#181822]">
                      <span className="text-zinc-400">DB Connection Pool Pressure:</span>
                      <span className={nPlusOneMode === 'before' ? 'text-red-400' : 'text-emerald-400'}>
                        {nPlusOneMode === 'before' ? 'High / Bottlenecked' : 'Low / Single Leased Connection'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#07070a] border border-[#1e1e26] rounded-xl p-5 font-mono text-xs text-zinc-300">
                  <span className="text-xs font-mono text-zinc-400 block mb-2">
                    {nPlusOneMode === 'before' ? 'UNOPTIMIZED SQL PROFILE' : 'OPTIMIZED BATCH JOIN PROFILE'}
                  </span>
                  <pre className="text-[11px] leading-relaxed overflow-x-auto text-zinc-300 p-2 bg-[#0c0c12] rounded border border-[#181822]">
                    {nPlusOneMode === 'before'
                      ? `-- 1 Initial Query\nSELECT * FROM organizations WHERE tenant_id = ?;\n\n-- Followed by N Iterative Statements:\nSELECT * FROM permissions WHERE org_id = 1;\nSELECT * FROM permissions WHERE org_id = 2;\n... (executed 100 times in loop)`
                      : `-- Single Batched Query with Composite Index\nSELECT o.*, p.* \nFROM organizations o \nJOIN FETCH o.permissions p \nWHERE o.tenant_id = :tenantId;\n-- Result cached in Redis for fast invalidation`}
                  </pre>
                  <p className="text-[11px] text-zinc-400 font-sans mt-3">
                    {nPlusOneMode === 'before'
                      ? 'ORM default lazy loading triggered repetitive round-trips over the network for every child entity.'
                      : 'Replaced with explicit JPA JOIN FETCH projections and composite indexing on (tenant_id, org_id).'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
