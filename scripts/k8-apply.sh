DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"            
envsubst < "$DIR/../k8-manifests/$1" | kubectl apply -f -