"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[921],{4651:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-7e1a880c",path:"/docs/configuration/protobuf.html",title:"Protobuf deserialization",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/protobuf.md",git:{updatedTime:1655662596e3,contributors:[{name:"Marcello",email:"marcellorego@gmail.com",commits:1}]}}},1665:(s,n,a)=>{a.r(n),a.d(n,{default:()=>d});var e=a(6252);const t=(0,e.uE)('<h1 id="protobuf-deserialization" tabindex="-1"><a class="header-anchor" href="#protobuf-deserialization" aria-hidden="true">#</a> Protobuf deserialization</h1><p>To deserialize topics containing data in Protobuf format, you can set topics mapping: for each <code>topic-regex</code> you can specify <code>descriptor-file-base64</code> (descriptor file encoded to Base64 format), or you can put descriptor files in <code>descriptors-folder</code> and specify <code>descriptor-file</code> name, also specify corresponding message types for keys and values. If, for example, keys are not in Protobuf format, <code>key-message-type</code> can be omitted, the same for <code>value-message-type</code>. . It&#39;s important to keep in mind that both <code>key-message-type</code> and <code>value-message-type</code> require a fully-qualified name. This configuration can be specified for each Kafka cluster.</p><p>Example configuration can look like as follows:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">connections</span><span class="token punctuation">:</span>\n    <span class="token key atrule">kafka</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token comment"># standard kafka properties</span>\n      <span class="token key atrule">deserialization</span><span class="token punctuation">:</span>\n        <span class="token key atrule">protobuf</span><span class="token punctuation">:</span>\n          <span class="token key atrule">descriptors-folder</span><span class="token punctuation">:</span> <span class="token string">&quot;/app/protobuf_desc&quot;</span>\n          <span class="token key atrule">topics-mapping</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token key atrule">topic-regex</span><span class="token punctuation">:</span> <span class="token string">&quot;album.*&quot;</span>\n              <span class="token key atrule">descriptor-file-base64</span><span class="token punctuation">:</span> <span class="token string">&quot;Cs4BCgthbGJ1bS5wcm90bxIXY29tLm5ldGNyYWNrZXIucHJvdG9idWYidwoFQWxidW0SFAoFdGl0bGUYASABKAlSBXRpdGxlEhYKBmFydGlzdBgCIAMoCVIGYXJ0aXN0EiEKDHJlbGVhc2VfeWVhchgDIAEoBVILcmVsZWFzZVllYXISHQoKc29uZ190aXRsZRgEIAMoCVIJc29uZ1RpdGxlQiUKF2NvbS5uZXRjcmFja2VyLnByb3RvYnVmQgpBbGJ1bVByb3RvYgZwcm90bzM=&quot;</span>\n              <span class="token key atrule">value-message-type</span><span class="token punctuation">:</span> <span class="token string">&quot;org.akhq.utils.Album&quot;</span>\n            <span class="token punctuation">-</span> <span class="token key atrule">topic-regex</span><span class="token punctuation">:</span> <span class="token string">&quot;film.*&quot;</span>\n              <span class="token key atrule">descriptor-file-base64</span><span class="token punctuation">:</span> <span class="token string">&quot;CuEBCgpmaWxtLnByb3RvEhRjb20uY29tcGFueS5wcm90b2J1ZiKRAQoERmlsbRISCgRuYW1lGAEgASgJUgRuYW1lEhoKCHByb2R1Y2VyGAIgASgJUghwcm9kdWNlchIhCgxyZWxlYXNlX3llYXIYAyABKAVSC3JlbGVhc2VZZWFyEhoKCGR1cmF0aW9uGAQgASgFUghkdXJhdGlvbhIaCghzdGFycmluZxgFIAMoCVIIc3RhcnJpbmdCIQoUY29tLmNvbXBhbnkucHJvdG9idWZCCUZpbG1Qcm90b2IGcHJvdG8z&quot;</span>\n              <span class="token key atrule">value-message-type</span><span class="token punctuation">:</span> <span class="token string">&quot;org.akhq.utils.Film&quot;</span>\n            <span class="token punctuation">-</span> <span class="token key atrule">topic-regex</span><span class="token punctuation">:</span> <span class="token string">&quot;test.*&quot;</span>\n              <span class="token key atrule">descriptor-file</span><span class="token punctuation">:</span> <span class="token string">&quot;other.desc&quot;</span>\n              <span class="token key atrule">key-message-type</span><span class="token punctuation">:</span> <span class="token string">&quot;org.akhq.utils.Row&quot;</span>\n              <span class="token key atrule">value-message-type</span><span class="token punctuation">:</span> <span class="token string">&quot;org.akhq.utils.Envelope&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',4),o=(0,e.Uk)("More examples about Protobuf deserialization can be found in "),p={href:"https://github.com/tchiotludo/akhq/tree/dev/src/test/java/org/akhq/utils",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("tests"),c=(0,e.Uk)(". Info about the descriptor files generation can be found in "),r={href:"https://github.com/tchiotludo/akhq/tree/dev/src/test/resources/protobuf_proto",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("test resources"),i=(0,e.Uk)("."),k={},d=(0,a(3744).Z)(k,[["render",function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[o,(0,e._)("a",p,[l,(0,e.Wm)(a)]),c,(0,e._)("a",r,[u,(0,e.Wm)(a)]),i])],64)}]])},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,e]of n)s[a]=e;return s}}}]);