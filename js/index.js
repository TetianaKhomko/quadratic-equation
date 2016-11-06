function calculate()
{
    var a = eval( document.forms.equ.a.value);
    var b = eval( document.forms.equ.b.value);
    var c = eval( document.forms.equ.c.value);
    var result = document.getElementById('result');
    var d = b * b - 4 * a * c;
    document.forms.equ.dis.value = d;
    if( d < 0 )
    {
        var str = "";
        str += ( -b ) / ( 2 * a );
        str +=" + i * ";
        str += Math.sqrt( - d ) / ( 2 * a );
        document.forms.equ.X1.value = str;
        
        str = "";
        str += ( - b ) / ( 2 * a );
        str += " - i * ";
        str += Math.sqrt( - d ) / ( 2 * a );
        document.forms.equ.X2.value = str;
    }
    else
    {
        document.forms.equ.X1.value = ( - b + Math.sqrt( d )) / ( 2 * a );
        document.forms.equ.X2.value = ( - b - Math.sqrt( d )) / ( 2 * a );
    }
}