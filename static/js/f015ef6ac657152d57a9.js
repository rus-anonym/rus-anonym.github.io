(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[2019],{645:(a,o)=>{o.read=function(a,o,t,h,r){var M,n,p=8*r-h-1,w=(1<<p)-1,f=w>>1,e=-7,s=t?r-1:0,u=t?-1:1,i=a[o+s];for(s+=u,M=i&(1<<-e)-1,i>>=-e,e+=p;e>0;M=256*M+a[o+s],s+=u,e-=8);for(n=M&(1<<-e)-1,M>>=-e,e+=h;e>0;n=256*n+a[o+s],s+=u,e-=8);if(0===M)M=1-f;else{if(M===w)return n?NaN:1/0*(i?-1:1);n+=Math.pow(2,h),M-=f}return(i?-1:1)*n*Math.pow(2,M-h)},o.write=function(a,o,t,h,r,M){var n,p,w,f=8*M-r-1,e=(1<<f)-1,s=e>>1,u=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,i=h?0:M-1,N=h?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(p=isNaN(o)?1:0,n=e):(n=Math.floor(Math.log(o)/Math.LN2),o*(w=Math.pow(2,-n))<1&&(n--,w*=2),(o+=n+s>=1?u/w:u*Math.pow(2,1-s))*w>=2&&(n++,w/=2),n+s>=e?(p=0,n=e):n+s>=1?(p=(o*w-1)*Math.pow(2,r),n+=s):(p=o*Math.pow(2,s-1)*Math.pow(2,r),n=0));r>=8;a[t+i]=255&p,i+=N,p/=256,r-=8);for(n=n<<r|p,f+=r;f>0;a[t+i]=255&n,i+=N,n/=256,f-=8);a[t+i-N]|=128*l}}}]);