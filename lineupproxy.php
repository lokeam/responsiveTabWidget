<?php
$url = $_GET[ 'url' ];
$callback = ( isset( $_REQUEST[ 'callback' ] ) && trim( $_REQUEST[ 'callback' ] ) !== '' ) ? $_REQUEST[ 'callback' ] : 'alwaysonjsoncallback';
header('Content-Type: application/json');
echo $callback . '('. fetchFeedData( $url ) .')';

function cleanString( $s ){
    $returnString = '';
    for($i=0;$i<strlen($s);$i++){
        $chr = substr($s,$i,1);
        if( ( ord($chr) >=127 && ord($chr)<=288 )||( ord($chr) >=383 && ord($chr)<=544 ) ){
            $returnString .=" ";
        }else{
            $returnString.=$chr;
        }
    }
    return $returnString;
}

function fetchFeedData( $url ){//echo urldecode( $url );exit;
    $ch = curl_init( $url );
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //curl_setopt($ch, CURLOPT_CONNECTTIMEOUT_MS, $this->timeout );    //add a timeout parameter for feed fetch
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    $data = curl_exec($ch);
    if( !$data ){
        $return = curl_error( $ch );
        $return = false;
    }else{
        $return = $data;
        //$return = cleanString($data);
    }
    curl_close($ch);
    return $return;
}

exit;