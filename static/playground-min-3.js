function compact(e){return format(e,!1)}function indent(e){return format(e,!0)}function format(e,r){var t="",n=!1,a=!1,i=0,s=0,c=e.charAt(s);for(e.startsWith("db.")&&(s=e.indexOf("(")+1,t+=e.substring(0,s));s<e.length;)if(" "!==(c=e.charAt(s))&&"\n"!==c&&"\t"!==c){switch(n&&"]"!==c&&"}"!==c&&(n=!1,i++,t+=r?newline(i):""),c){case"(":a=!0,t+=c;break;case")":a=!1,t+=c;break;case"{":case"[":n=!0,t+=c;break;case",":t+=c,r&&(t+=a?" ":newline(i));break;case":":t+=c,r&&(t+=" ");break;case"}":case"]":n?n=!1:(i--,t+=r?newline(i):""),t+=c;break;case'"':case"'":var f=c;for(t+='"',s++,c=e.charAt(s);c!==f&&s<e.length;)t+=c,s++,c=e.charAt(s);s!=e.length&&(t+='"');break;case"n":var h=e.substring(s,s+9);if("new Date("===h){for(t+=h,s+=h.length,c=e.charAt(s);")"!==c&&s<e.length;)t+=c,s++,c=e.charAt(s);s!=e.length&&(t+=")")}else t+=c;break;case"/":for(t+=c,s++,c=e.charAt(s);"/"!==c&&s<e.length;)t+=c,s++,c=e.charAt(s);s!=e.length&&(t+="/");break;default:t+=c}s++}else s++;return t}function newline(e){for(var r="\n",t=0;t<e;t++)r+="  ";return r}function formatConfig(e,r){if(!e.startsWith("[")||!e.endsWith("]")){if("json"!==r)return"invalid";if(!e.startsWith("{")||!e.endsWith("}"))return"invalid"}return e}function formatQuery(e,r){var t=e;if(e.endsWith(";")&&(t=e.slice(0,-1)),!/^db\..(\w+)\.(find|aggregate)\([\s\S]*\)$/.test(t))return"invalid";var n=t.indexOf("(")+1;return query=t.substring(n,t.length-1),""===query||query.endsWith("}")||query.endsWith("]")?t:"invalid"}