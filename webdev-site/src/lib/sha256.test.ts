import { expect, test } from "bun:test";

import { sha256 } from "./sha256";

function testhashing(){
    const expected : [string, string][] = [
        ["apple", "3a7bd3e2360a3d29eea436fcfb7e44c735d117c42d1c1835420b6b9942dd4f1b"],
        ["", "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"],
        [" ", "36a9e7f1c95b82ffb99743e0c5c4ce95d83c9a430aac59f84ef3cbfab6145068"],
        ["apple ", "e0f6f390c37556b5eb3292a63159aea8ec795a4a1d4f22a18abb14ac7341508f"],
        ["hello\nworld", "26c60a61d01db5836ca70fefd44a6a016620413c8ef5f259a6c5612d4f79d3b8"],
    ]

    expected.forEach((element) => {
        test(`Test that sha256('${element[0]}') = '${element[1]}'`, async () => {
            const result = await sha256(element[0]);
            expect(result).toBe(element[1]);
        })
    })
}

testhashing()