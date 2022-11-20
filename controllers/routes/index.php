<?php
/**
 * all the route handlers
 */

class SpaceRoutes {

    public function __construct(){
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Methods: GET, POST");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    }

    // get all capsules
    public function getAll() {
        // sending get request to the api
        $ch = curl_init();
        try {
            $url = "https://api.spacexdata.com/v3/capsules";

            //set the url, number of POST vars, POST data
            curl_setopt($ch,CURLOPT_URL, $url);
            curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 

            //execute post
            $result = curl_exec($ch);
            return $result;
        } catch (\Throwable $th) {
            throw $th;
        } finally {
            curl_close($ch);
        }
    }

    // get individual capsule
    public function getOne($req) {
        $reqBody = $req->body();
        $data = json_decode($reqBody, TRUE);
        

        // sending get request to the api
        $ch = curl_init();
        try {
            $url = "https://api.spacexdata.com/v3/capsules?capsule_serial=" . $data;

            //set the url, number of POST vars, POST data
            curl_setopt($ch,CURLOPT_URL, $url);
            curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 

            //execute post
            $result = curl_exec($ch);

            // check if response is not empty
            if(count(json_decode($result)) === 0) {
                return json_encode(["error" => "not found"]);
            } else {
                return $result;
            }
        } catch (\Throwable $th) {
            throw $th;
        } finally {
            curl_close($ch);
        }
    }

}