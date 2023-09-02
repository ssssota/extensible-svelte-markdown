import{w as ln,c as z}from"./path.53f90ab3.js";import{b8 as an,b9 as G,ba as w,bb as rn,bc as g,a8 as on,bd as K,be as _,bf as un,bg as t,bh as sn,bi as tn,bj as fn}from"./index.1227bc7c.js";function cn(l){return l.innerRadius}function gn(l){return l.outerRadius}function yn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,D,j,v,A,B,a){var E=D-l,i=j-h,n=B-v,m=a-A,r=m*E-n*i;if(!(r*r<g))return r=(n*(h-A)-m*(l-v))/r,[l+r*E,h+r*i]}function V(l,h,D,j,v,A,B){var a=l-D,E=h-j,i=(B?A:-A)/K(a*a+E*E),n=i*E,m=-i*a,r=l+n,s=h+m,f=D+n,c=j+m,C=(r+f)/2,o=(s+c)/2,p=f-r,y=c-s,R=p*p+y*y,b=v-A,T=r*c-f*s,I=(y<0?-1:1)*K(fn(0,b*b*R-T*T)),O=(T*y-p*I)/R,S=(-T*p-y*I)/R,P=(T*y+p*I)/R,d=(-T*p+y*I)/R,x=O-C,e=S-o,u=P-C,F=d-o;return x*x+e*e>u*u+F*F&&(O=P,S=d),{cx:O,cy:S,x01:-n,y01:-m,x11:O*(v/b-1),y11:S*(v/b-1)}}function vn(){var l=cn,h=gn,D=z(0),j=null,v=yn,A=mn,B=pn,a=null,E=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,C=un(c-f),o=c>f;if(a||(a=n=E()),s<r&&(m=s,s=r,r=m),!(s>g))a.moveTo(0,0);else if(C>on-g)a.moveTo(s*G(f),s*w(f)),a.arc(0,0,s,f,c,!o),r>g&&(a.moveTo(r*G(c),r*w(c)),a.arc(0,0,r,c,f,o));else{var p=f,y=c,R=f,b=c,T=C,I=C,O=B.apply(this,arguments)/2,S=O>g&&(j?+j.apply(this,arguments):K(r*r+s*s)),P=_(un(s-r)/2,+D.apply(this,arguments)),d=P,x=P,e,u;if(S>g){var F=sn(S/r*w(O)),L=sn(S/s*w(O));(T-=F*2)>g?(F*=o?1:-1,R+=F,b-=F):(T=0,R=b=(f+c)/2),(I-=L*2)>g?(L*=o?1:-1,p+=L,y-=L):(I=0,p=y=(f+c)/2)}var H=s*G(p),J=s*w(p),M=r*G(b),N=r*w(b);if(P>g){var Q=s*G(y),U=s*w(y),W=r*G(R),X=r*w(R),q;if(C<an)if(q=dn(H,J,W,X,Q,U,M,N)){var Y=H-q[0],Z=J-q[1],$=Q-q[0],k=U-q[1],nn=1/w(tn((Y*$+Z*k)/(K(Y*Y+Z*Z)*K($*$+k*k)))/2),en=K(q[0]*q[0]+q[1]*q[1]);d=_(P,(r-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}I>g?x>g?(e=V(W,X,H,J,s,x,o),u=V(Q,U,M,N,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(H,J),a.arc(0,0,s,p,y,!o)):a.moveTo(H,J),!(r>g)||!(T>g)?a.lineTo(M,N):d>g?(e=V(M,N,Q,U,r,-d,o),u=V(H,J,W,X,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,b,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[G(m)*n,w(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:z(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:z(+n),i):h},i.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:z(+n),i):D},i.padRadius=function(n){return arguments.length?(j=n==null?null:typeof n=="function"?n:z(+n),i):j},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:z(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:z(+n),i):A},i.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:z(+n),i):B},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
