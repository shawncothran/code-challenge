# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(strandA, strandB):
    if len(strandA) == len(strandB):
        distance = 0
        for i in range(len(strandA)):
            if strandA[i] != strandB[i]:
                distance += 1
        return distance
    raise ValueError('DNA strands must be of equal length.')

# what am i doing wrong down below?
# def compute(strandA, strandB):
#     if len(strandA) == len(strandB):
#         for i, char in enumerate(strandA):
#             if char == strandB[i]:
#                 strandA = strandA[:i] + strandA[i + 1:]
#         return len(strandA)
#     raise ValueError('DNA strands must be of equal length.')
