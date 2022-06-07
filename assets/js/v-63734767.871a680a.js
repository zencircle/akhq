"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[869],{9493:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-63734767",path:"/docs/configuration/authentifications/ldap.html",title:"LDAP",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/authentifications/ldap.md",git:{updatedTime:1654577555e3,contributors:[{name:"tooptoop4",email:"33283496+tooptoop4@users.noreply.github.com",commits:1}]}}},8932:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(6252);const p=(0,e.uE)('<h1 id="ldap" tabindex="-1"><a class="header-anchor" href="#ldap" aria-hidden="true">#</a> LDAP</h1><p>Configure how the ldap groups will be matched in AKHQ groups</p><ul><li><code>akhq.security.ldap.groups</code>: Ldap groups list <ul><li><code>- name: ldap-group-name</code>: Ldap group name (same name as in ldap) <ul><li><code>groups</code>: AKHQ group list to be used for current ldap group</li></ul></li></ul></li></ul>',3),t=(0,e.Uk)("Example using "),l={href:"https://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("online ldap test server"),c=(0,e.uE)('<p>Configure ldap connection in micronaut</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">micronaut</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token key atrule">ldap</span><span class="token punctuation">:</span>\n      <span class="token key atrule">default</span><span class="token punctuation">:</span>\n        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n        <span class="token key atrule">context</span><span class="token punctuation">:</span>\n          <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;ldap://ldap.forumsys.com:389&#39;</span>\n          <span class="token key atrule">managerDn</span><span class="token punctuation">:</span> <span class="token string">&#39;cn=read-only-admin,dc=example,dc=com&#39;</span>\n          <span class="token key atrule">managerPassword</span><span class="token punctuation">:</span> <span class="token string">&#39;password&#39;</span>\n        <span class="token key atrule">search</span><span class="token punctuation">:</span>\n          <span class="token key atrule">base</span><span class="token punctuation">:</span> <span class="token string">&quot;dc=example,dc=com&quot;</span>\n        <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n          <span class="token key atrule">base</span><span class="token punctuation">:</span> <span class="token string">&quot;dc=example,dc=com&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>If you want to enable anonymous auth to your LDAP server you can pass :</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">managerDn</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>\n<span class="token key atrule">managerPassword</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>In Case your LDAP groups do not use the default UID for group membership, you can solve this using</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">micronaut</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token key atrule">ldap</span><span class="token punctuation">:</span>\n      <span class="token key atrule">default</span><span class="token punctuation">:</span>\n        <span class="token key atrule">search</span><span class="token punctuation">:</span>\n          <span class="token key atrule">base</span><span class="token punctuation">:</span> <span class="token string">&quot;OU=UserOU,dc=example,dc=com&quot;</span>\n          <span class="token key atrule">attributes</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token string">&quot;cn&quot;</span>\n        <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n          <span class="token key atrule">base</span><span class="token punctuation">:</span> <span class="token string">&quot;OU=GroupsOU,dc=example,dc=com&quot;</span>\n          <span class="token key atrule">filter</span><span class="token punctuation">:</span> <span class="token string">&quot;member={0}&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Replace</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">attributes</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token string">&quot;cn&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>with your group membership attribute</p><p>Configure AKHQ groups and Ldap groups and users</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">micronaut</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n      <span class="token key atrule">topic-reader</span><span class="token punctuation">:</span>\n        <span class="token key atrule">name</span><span class="token punctuation">:</span> topic<span class="token punctuation">-</span>reader <span class="token comment"># Group name</span>\n        <span class="token key atrule">roles</span><span class="token punctuation">:</span>  <span class="token comment"># roles for the group</span>\n          <span class="token punctuation">-</span> topic/read\n        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>\n          <span class="token comment"># List of Regexp to filter topic available for group</span>\n          <span class="token comment"># Single line String also allowed</span>\n          <span class="token comment"># topics-filter-regexp: &quot;^(projectA_topic|projectB_.*)$&quot;</span>\n          <span class="token key atrule">topics-filter-regexp</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token string">&quot;^projectA_topic$&quot;</span> <span class="token comment"># Individual topic</span>\n            <span class="token punctuation">-</span> <span class="token string">&quot;^projectB_.*$&quot;</span> <span class="token comment"># Topic group</span>\n          <span class="token key atrule">connects-filter-regexp</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token string">&quot;^test.*$&quot;</span>\n          <span class="token key atrule">consumer-groups-filter-regexp</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token string">&quot;consumer.*&quot;</span>\n      <span class="token key atrule">topic-writer</span><span class="token punctuation">:</span>\n        <span class="token key atrule">name</span><span class="token punctuation">:</span> topic<span class="token punctuation">-</span>writer <span class="token comment"># Group name</span>\n        <span class="token key atrule">roles</span><span class="token punctuation">:</span>\n          <span class="token punctuation">-</span> topic/read\n          <span class="token punctuation">-</span> topic/insert\n          <span class="token punctuation">-</span> topic/delete\n          <span class="token punctuation">-</span> topic/config/update\n        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>\n          <span class="token key atrule">topics-filter-regexp</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token string">&quot;test.*&quot;</span>\n          <span class="token key atrule">connects-filter-regexp</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token string">&quot;^test.*$&quot;</span>\n          <span class="token key atrule">consumer-groups-filter-regexp</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token string">&quot;consumer.*&quot;</span>\n    <span class="token key atrule">ldap</span><span class="token punctuation">:</span>\n      <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mathematicians\n          <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>reader\n        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> scientists\n          <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>reader\n            <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>writer\n      <span class="token key atrule">users</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> franz\n          <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>reader\n            <span class="token punctuation">-</span> topic<span class="token punctuation">-</span>writer\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>',11),u={},r=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,(0,e._)("a",l,[o,(0,e.Wm)(a)])]),c],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);