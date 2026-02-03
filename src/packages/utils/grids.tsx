export default function Grids(props : any) {
  const {color, gridBoldAfterEach, gridBoldDepth} = props;
  const lines = [];
  for(let y=0; y<=900; y+=10){
    lines.push(<line x1="0" y1={y} x2="2000" y2={y} key={`h${y}`} stroke={color} strokeWidth={y%gridBoldAfterEach === 0? gridBoldDepth: 0.1}/>);
  }
  for(let x=0; x<=2000; x+=10){
    lines.push(<line x1={x} y1="0" x2={x} y2="900" key={`v${x}`} stroke={color} strokeWidth={x%gridBoldAfterEach === 0? gridBoldDepth: 0.1}/>)
  }
  return (<g>{lines.map((item) => item )}</g>);
}