# algorithms -

algorithms - 

binary search only works on sorted list

finding an item

1. regular loop — if there’s 20 items, we do 20 loops
2. binary search - we do 5 loops

placing items in order

1. selectionSort - slower / compares more, moves less

	1. current min is 0
	2. move through array
	3. as a smaller numbers found, they beceom new min 
	4. swap new min with 0
	5. if no smaller num found,
	6. new min is 1
	7. —
	8. move thru array
	9. if smaller num not found, 
	10. new min is 2
	11. OR if smaller num found
	12. it becomes new min
	13. at end, swap new min with 2 
	14. new min is 2
	15. —
	16. move through array
	17. if no smaller num, 
	18. new min is 3
	19. OR if smaller found
	20. it becomes new min
	21. at end, swap new min with 3
	22. new min is 3
	23. —
1. insertionSort - faster / moves more, compares less

	1. begin with 0 - sorted
	2. compare 1 and 0, swap if 1 < 0 - sorted
	3. compare 2 and previous - sorted
	4. compare 3 and previous - sorted
