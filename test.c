#include <stdio.h>
#include <stdlib.h>

int main(){
    int pid;
    printf("start\n");
    pid = fork();
    printf("pid = %d\n", pid);
    pid = fork();
    printf("pid = %d\n", pid);
}